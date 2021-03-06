<p align="center">
    <a href="#"><img src="https://raw.githubusercontent.com/fanduel-oss/refract/master/logo/refract-logo-colour.png" height="70" /></a>
</p><br/>

<p align="center">
    Master your React and Redux app's effects through the<br/>
    power of reactive programming.
</p>
<br/>

<p align="center">
    <a href="#why"><strong>Why?</strong></a> ·
    <a href="#installation"><strong>Install</strong></a> ·
    <a href="#the-gist"><strong>The gist</strong></a> ·
    <a href="#learn-refract"><strong>Learn</strong></a> ·
    <a href="#contributing"><strong>Contribute</strong></a> ·
    <a href="#discuss"><strong>Discuss</strong></a>
</p>
<br/>

<p align="center">
    <img src="https://img.shields.io/bundlephobia/minzip/LIBRARY_NAME.svg" alt="Library size">
    <img src="https://img.shields.io/npm/v/LIBRARY_NAME.svg?maxAge=3600&label=LIBRARY_NAME">
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="MIT License">
    </a>
</p>
<br/>

Refract lets you isolate your app's side effects - API calls, analytics, logging, etc - so that you can write your code in a clear, pure, and declarative fashion by using reactive programming.

Refract is an extensible library built for React, with bindings available for Inferno and Preact. In addition we provide a Redux integration, which can also serve as a template for integrations with other libraries.

# Why?

Component-based architecture and functional programming have become an increasingly popular approach for building UIs. They help make apps more predictable, more testable, and more maintainable.

However, our apps don't exist in a vacuum! They need to make network requests, handle data persistence, log analytics, deal with changing time, and so on. Any non-trivial app has to handle any number of these external effects.

These side-effects hold us back from writing fully declarative code. Wouldn't it be nice to cleanly separate them from our apps?

Refract solves this problem for you. [For an in-depth introduction, head to `Why Refract`.](../../docs/introduction/why-refract.md)

# Installation

```
npm install --save LIBRARY_NAME
```

Refract is available for a number of reactive programming libraries. For each library, a Refract integration is available for React, Inferno, Preact and Redux.

Available packages:

<!-- prettier-ignore-start -->
| | [React](https://github.com/facebook/react) | [Inferno](https://infernojs.org/) | [Preact](https://preactjs.com/) | [Redux](https://github.com/reduxjs/redux) |
| --- | --- | --- | --- | --- |
| **[Callbag](https://github.com/callbag/callbag)** | refract-callbag | refract-inferno-callbag | refract-preact-callbag | refract-redux-callbag |
| **[Most](https://github.com/cujojs/most)** | refract-most | refract-inferno-most | refract-preact-most | refract-redux-most |
| **[RxJS](https://github.com/reactivex/rxjs)** | refract-rxjs | refract-inferno-rxjs | refract-preact-rxjs | refract-redux-rxjs |
| **[xstream](https://github.com/staltz/xstream)** | refract-xstream | refract-inferno-xstream | refract-preact-xstream | refract-redux-xstream |
<!-- prettier-ignore-end -->

# The Gist

```js
import { compose, createStore } from 'redux'
import { refractEnhancer } from 'refract-redux-rxjs'

const reducers = combineReducers({
    username: (state, action) => {
        if (action.type === 'USERNAME') {
            return action.payload
        }

        return state
    }
})
const store = createStore(reducers, {}, compose(refractEnhancer()))

const usernameActions$ = store.observe('USERNAME')
const username$ = store.observe(state => state.username)
```

### Store enhancer

The Refract store enhancer adds an `observe` method which takes a single argument (action type or store selector) and returns an observable. Read [observing redux](../../docs/usage/observing-redux) for more details.

# Learn Refract

## Documentation

Documentation is available at [refract.js.org](https://refract.js.org). We aim to provide a helpful and thorough documentation: all documentation files are located on this repo and we welcome any pull request helping us achieve that goal.

## Examples

We maintain and will grow over time a set of examples to illustrate the potential of Refract, as well as providing reactive programming examples: [refract.js.org/examples](https://refract.js.org/examples).

Examples are illustrative and not the idiomatic way to use Refract. Each example is available for the four reactive libraries we support (RxJS, xstream, Most and Callbag), and we provide links to run the code live on [codesandbox.io](https://codesandbox.io). All examples are hosted on this repo, and we welcome pull requests helping us maintaining them.

# Contributing

We welcome many forms of contribution from anyone who wishes to get involved.

Before getting started, please read through our [contributing guidelines](../../CONTRIBUTING.md) and [code of conduct](../../CODE_OF_CONDUCT.md).

# Links

### Logo

[The Refract logo is available in the Logo directory](../../logo/).

### License

[Refract is available under the MIT license.](../../LICENSE)

### Discuss

[Everyone is welcome to join our discussion channel - `#refract` on the Reactiflux Discord server.](https://discord.gg/fqk86GH)
