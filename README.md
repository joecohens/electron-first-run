# electron-first-run

[![Build Status: Linux and macOS](https://travis-ci.org/joecohens/electron-first-run.svg?branch=master)](https://travis-ci.org/joecohens/electron-first-run) [![Build status: Windows](https://ci.appveyor.com/api/projects/status/clt0lv851qbkc0ax/branch/master?svg=true)](https://ci.appveyor.com/project/joecohens/electron-first-run/branch/master)

Check if it's the first time an Electron App runs with [electron-store](https://github.com/sindresorhus/electron-store)

This pacakge it's based on [first-run](https://github.com/sindresorhus/first-run) by [@sindresorhus](https://github.com/sindresorhus), keeping the API as a drop in replacement for Electron.

## Install

```
$ npm install --save electron-first-run
or
$ yarn add --save electron-first-run
```

## Usage

```js
// main process
const firstRun = require('electron-first-run');

const isFirstRun = firstRun()
console.log(isFirstRun);
```

## API

### firstRun([options])

#### options.name

Type: `string`
Default: `config`

Name of the storage file (without extension).

This is useful if you want multiple storage files for your app. Or if you're making a reusable Electron module that persists some data, in which case you should not use the name `config`.

### firstRun.clear()

Clear the state.

### firstRun.getStore()

Get the current `electron-store` config.


## License

MIT © [Joseph Cohen](http://joecohens.com)
