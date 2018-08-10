const electron = require('electron');
const {getStore} = require('.');

// Prevent Electron from never exiting when an exception happens
process.on('uncaughtException', err => {
  console.error('Exception:', err);
  process.exit(1); // eslint-disable-line no-process-exit
});

console.log(getStore().path);

electron.app.quit();
