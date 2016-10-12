# Intilery React Native [![Build Status](https://travis-ci.org/Intilery/intilery-react-native.svg?branch=master)](https://travis-ci.org/Intilery/intilery-react-native) [![Circle CI](https://circleci.com/gh/Intilery/intilery-react-native.svg?style=svg)](https://circleci.com/gh/Intilery/intilery-react-native) [![npm version](https://badge.fury.io/js/intilery-react-native.svg)](http://badge.fury.io/js/intilery-react-native)

Intilery React Native is an SDK for you to use to integrate your [React Native](https://facebook.github.io/react-native/) mobile applications into Intilery.

- [Getting Started](#getting-started)
- [Documentation](#documentation)
- [Upgrading](#upgrading)
- [Getting Help](#getting help)
- [Opening Issues](#opening-issues)
- [Contributing](#contributing)
- [License](#license)

## Introduction

## Getting Started
The Intilery React Native module depends on [react-native-device-info][rndi].

```
npm install --save react-native-device-info
npm install --save intilery-react-native
```

In the root of your application add the following lines of code:
```JavaScript
var Intilery = require('intilery-react-native');
Intilery.setup('<name of app>', '<auth token>');
```

## Integration

On each screen that requires using the Intilery tag, include the Intilery tag:
```JavaScript
var Intilery = require('intilery-react-native');
```

### Register for Push Notifications

To associate the visitor with a token to use with push notifications (e.g GCM token) you first of all need to generate a token.
Example instructions on how to do this can be found here:
- [iOS](https://facebook.github.io/react-native/docs/pushnotificationios.html)
- [Android](https://www.npmjs.com/package/react-native-push-notification)
  You don't have to use these methods however, it doesn't matter how you generate the token.

Once you have the token call
```JavaScript
Intilery.registerForPushNotifications(token)
```


### Tracking Events
```JavaScript
Intilery.trackEvent(<event action>, <event data>, <event name>).done();
```

Where `event data` is a map containing `key : value` pairs where each `key` is a `entity.property`.

e.g.
```JavaScript
Intilery.trackEvent('select movie', {'Movie.Title':movie.title});
```

### Set Visitor Properties
```JavaScript
Intilery.setVisitorProperties(<visitor data>).done();
```

Where `visitor data` is a map containing `key : value` pairs where each `key` is a visitor or customer `property`.

e.g.
```JavaScript
Intilery.setVisitorProperties({'Last Movie':movie.title}).done();
```

### Get Visitor Properties
```JavaScript
Intilery.getVisitorProperties(<property list>, callback).done();
```

Where `property list` is a list of visitor properties.

e.g.
```JavaScript
Intilery.getVisitorProperties(['Last Movie'], this.setLastMovie).done();
```

## Upgrading

TODO: use npm

## Getting Help

Please contact your account manager.

## Opening Issues

If you encounter a but with Intilery React Native we would like to hear about it. Search the [existing issues](https://github.com/Intilery/intilery-react-native/issues) and try to make sure your problem doesn't already exist before opening a new issue. It's helpful if you include the version of Intilery React Native, React Native and OS you're using. Please include a stack trace and reduced repro case when appropriate, too.

The GitHub issues are intended for but reports and feature requests. For help and questions with using Intilery React Native please make use of the resources listed in the [Getting Help](#getting-help) section. 

## Contributing

For more information about contributing PRs and issues, see our [Contribution Guidelines](https://github.com/Intilery/intilery-react-native/blob/master/CONTRIBUTING.md).

## License

Intilery React Native is [ISC](./LICENSE).


[rndi]:https://github.com/rebeccahughes/react-native-device-info
