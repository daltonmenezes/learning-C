'use strict';

const {app, BrowserWindow} = require('electron')

let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    title: 'localStorage',
    width: 400,
    height: 250,
    center: true,
  })

  mainWindow.loadURL(`file://${__dirname}/index.html`)
  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
    app.quit()
  })
})

// Restore the window on Mac when the user click on the app icon in the dock
app.on('activate', () => {
  mainWindow.restore()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin')
      app.quit()
})