/**
 * @flow weak
 *
 */
'use strict';
type eventDataType = {[id:string]: string};

var React = require('react-native');
var {
  AsyncStorage
} = React;

var DeviceInfo = require('react-native-device-info');

var STORAGE_KEY = '@IntileryConfiguration:key';

let _logError = function(error, info) {
  console.warn("Intilery: " + info + ": " + error.name + ': ' + error.message);
}

let _readConfiguration = async function() {
  var config = await AsyncStorage.getItem(STORAGE_KEY);
  if (config === null) {
    console.warn('Intilery: Not configured!');
    return {token:''};
  }
  return JSON.parse(config);
}

let setup = async function(appid: string, token: string, domain?: string) {
  let apiDomain = domain || 'www.intilery-analytics.com';
  let config = JSON.stringify({appname: appid, token: token, domain: apiDomain});
  await AsyncStorage.setItem(STORAGE_KEY, config);
}

let trackEvent = async function(eventAction: string, eventData: eventDataType, eventName?: string) {
  eventName = eventName || eventAction;
  let visitorID = DeviceInfo.getUniqueID();

  let config = await _readConfiguration();
  let token = config.token;
  let baseURL = 'https://' + config.domain + '/api/event';

  let data = {
    'Visit': {
      'VisitorID':visitorID
    },
    'EventAction':eventAction,
    'EventName':eventName,
    'EventData':eventData};

  fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Authorization':'Basic ' + token
      },
      body: JSON.stringify(data)
      })
  .catch((error) => { _logError(error, "Sending Data");});
}

let registerForPushNotifications = async function(token: string) {
  let config = await _readConfiguration();
  let appCode = config.appname;
  let eventData = {
    'Register App.appCode': appCode,
    'Register App.deviceID': token
  };
  return trackEvent('Set Device ID', eventData);
}

let setVisitorProperties = async function(eventData: eventDataType, eventFunction?: string) {
  var visitorData = eventFunction ? {'Visitor._eventFunction':eventFunction} : {};

  for (var key in eventData) {
    visitorData['Visitor.' + key] = eventData[key];
  }

  return trackEvent('Set Visitor Property', visitorData, 'Set Visitor Property');
}

let _checkResponseStatus = function(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  throw new Error("Response status: " + response.status);
}

let _jsonResponse = function(response) {
  return response.json();
}

let getVisitorProperties = async function(properties: Array<string>, callbackFn: (properties:any) => any) {
  let visitorID = DeviceInfo.getUniqueID();

  let config = await _readConfiguration();
  let token = config.token;
  let baseURL = 'https://' + config.domain + '/api/visitor/' + visitorID + '/properties';
  let apiCall = baseURL + '?properties=' + properties.join();

  fetch(apiCall, {
    method: 'GET',
    headers: {
        'Content-Type':'application/json',
        'Authorization':'Basic ' + token
    }
  })
  .then(_checkResponseStatus)
  .then(_jsonResponse)
  .then(callbackFn)
  .catch((error) => { _logError(error, "Getting Properties");});
}

var Intilery = {
  setup: setup,
  trackEvent: trackEvent,
  registerForPushNotifications: registerForPushNotifications,
  setVisitorProperties:setVisitorProperties,
  getVisitorProperties:getVisitorProperties
}

module.exports = Intilery;
