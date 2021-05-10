import { app, BrowserWindow, Menu } from 'electron'

let mainWindow

function createWindow() {
  let mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true,
    },
  })

  const isDev = process.env.NODE_ENV === 'development'

  const winURL = isDev
    ? `http://localhost:8765`
    : `file://${__dirname}/index.html`

  mainWindow.loadURL(winURL)
  if (isDev) {
    // mainWindow.resizable = true
    mainWindow.webContents.openDevTools()
  }
}
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
app.on('ready', createWindow)
