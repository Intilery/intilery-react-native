# Contributing to Intilery React Native

Intilery React Native is one of Intilery's first open source projects that is both under active development and is also being used to integrate mobile applications with [Intilery.com](https://www.intilery.com). We're still working out the kinks to make contributing as easy and transparent as possible, but we're not quite there yet. Hopefully this document makes the process for contributing clear and preempts some questions you have.

## Our Development Process

Some of our core team will be working directly on GitHub. These changes will be public from the beginning. Other changesets will come via a bridge with Intilery's internal source control. This is a necessity as it allows engineers at Intilery outside the core team to move fast and contribute from an environment they are comfortable in.

### `master` is unsafe

We will do our best to keep `master` in good shape, with tests passing at all times. But in order to move fast, we will make API changes that your application might not be compatible with. We will do our best to communicate these changes and version appropriately so you can lock into a specific version if need be.

### Pull Requests

The core team will be monitoring for pull requests. When we get one, we'll run some Intilery-specific integration tests on it first. From here, we'll need to get another person to sign off on the changes and then merge the pull request. For API changes we may need to fix internal uses, which could cause some delay. We'll do our best to provide updates and feedback throughout the process.

*Before* submitting a pull request, please make sure the following is done…

0. Ensure you can contribute your changes under the Intilery React Native License.
1. Fork the repo and create your branch from `master`.
2. **Describe your test plan in your commit.** If you've added code that should be tested, add tests!
3. If you've changed APIs, update the documentation.
4. Ensure tests pass on Travis and Circle CI.
5. Make sure your code lints (`npm run lint`).
6. Squash your commits (`git rebase -i`).

## Bugs

### Where to Find Known Issues

We are using GitHub Issues for our public bugs. We keep a close eye on this and try to make it clear when we have an internal fix in progress. Before filing a new task, try to make sure your problem doesn't already exist.

### Reporting New Issues

The best way to get your bug fixed is to provide a reduced test case. Plase provide either a public repository with a runnable example or a [React Native Playground](https://rnplay.org/) snippet.

## How to Get in Touch

* Contact your account manager.

## Style Guide

### Code

#### General

* **Most important: Look around.** Match the style you see used in the rest of the project. This includes formatting, naming things in code, naming things in documentation.
* Add trailing commas,
* 2 spaces for indentation (no tabs)
* "Attractive"

#### JavaScript

* Use semicolons;
* `'use strict';`
* Prefer `'` over `"`
* Do not use the optional parameters of `setTimeout` and `setInterval`
* 80 character line length

#### Objective-C

* Space after `@property` declarations
* Brackets on *every* `if`, on the *same* line
* `- method`, `@interface`, and `@implementation` brackets on the following line
* *Try* to keep it around 80 characters line length (sometimes it's just not possible...)
* `*` operator goes with the variable name (e.g. `NSObject *variableName;`)

### Documentation

* Do not wrap lines at 80 characters - configure your editor to soft-wrap when editing documentation.

## License

By contributing to Intilery React Native, you agree that your contributions will be licensed under its BDS license.
