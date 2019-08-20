const electron = require('electron');
const firstRun = require('.');

// Prevent Electron from never exiting when an exception happens
process.on('uncaughtException', err => {
  console.error('Exception:', err);
  process.exit(1);
});

console.log(firstRun());

electron.app.quit();
