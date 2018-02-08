const {app, dialog, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true
});

let win;

function createWindow () {
    win = new BrowserWindow({
        width: 350,
        height: 600,
        icon: path.join(__dirname, 'lib/assets/favicon-96x96.png')
    });
    win.loadURL(startUrl);
    win.on('closed', () => {win = null;});
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win == null) {
        createWindow();
    }
});

module.exports.selectDirectory = function () {
    selectDirectory();
};
