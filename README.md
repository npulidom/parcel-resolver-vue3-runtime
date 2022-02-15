# parcel-resolver-vue3-runtime

![Version](https://img.shields.io/npm/v/parcel-resolver-vue3-runtime)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> 🌀 Parcel 2 plugin that resolves vue-3 runtime in production environment.

## Installation

```sh
# Installs the plugin and saves it as a dev dependency
npm i parcel-resolver-vue3-runtime -D
```

## Configuration

Create a `.parcelrc` configuration file and add the plugin to resolvers like this:

```js
{
    "extends": "@parcel/config-default",
    "resolvers": ["parcel-resolver-ignore", "..."]
}
```

## Motivation

This plugin solves issue [#7663](https://github.com/parcel-bundler/parcel/issues/7663) for vue-3 runtime in production environment.