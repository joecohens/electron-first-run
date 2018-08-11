const fs = require('fs');
const path = require('path');
const {app} = require('electron');
const makeDir = require('make-dir');

const getConfigPath = opts => {
  opts = Object.assign({name: '.electron-app-first-run'}, opts);

  const configPath = path.join(app.getPath('userData'), 'FirstRun', opts.name);

  return configPath;
};

const firstRun = opts => {
  const configPath = getConfigPath(opts);

  if (fs.existsSync(configPath)) {
    return false;
  }

  try {
    fs.writeFileSync(configPath, '');
  } catch (err) {
    if (err.code === 'ENOENT') {
      makeDir.sync(path.join(app.getPath('userData'), 'FirstRun'));
      
      return firstRun(opts);
    }

    throw err;
  }

  return true;
};

const clear = opts => {
  const configPath = getConfigPath(opts);

  if (fs.existsSync(configPath)) {
    fs.unlinkSync(configPath);
  }
};

module.exports = firstRun;
module.exports.clear = clear;
