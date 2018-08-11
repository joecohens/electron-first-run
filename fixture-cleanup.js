const electron = require('electron');
const firstRun = require('.');

// Prevent Electron from never exiting when an exception happens
process.on('uncaughtException', err => {
  console.error('Exception:', err);
  process.exit(1); // eslint-disable-line no-process-exit
});

firstRun.clear();

electron.app.quit();
