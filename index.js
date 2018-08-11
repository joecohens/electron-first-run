const fs = require('fs');
const path = require('path');
const electron = require('electron');

const getConfigPath = opts => {
  opts = Object.assign({name: '.electron-app-first-run'}, opts);

  const configPath = path.join(electron.app.getPath('userData'), opts.name);

  return configPath;
};

const firstRun = opts => {
  const configPath = getConfigPath(opts);

  if (fs.existsSync(configPath)) {
    return false;
  }

  fs.writeFileSync(configPath, '');

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
