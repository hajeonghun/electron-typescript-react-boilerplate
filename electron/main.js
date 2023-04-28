import electron, {app, BrowserWindow} from 'electron';

let mainWindow;

//어플리케이션 기동이 종료 후 동작한다.
app.on('ready', () => {
  createWindow();
});

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1350,
    height: 800,
    useContentSize: true,
    title: 'Electron',
    webPreferences: {
      devTools: true
    }
  });

  mainWindow.loadURL('http://127.0.0.1:3000');
  mainWindow.openDevTools()
  //윈도우 전부를 닫고, null로 지정한다.
  mainWindow.on('closed', () => {
    mainWindow = null
  });
}
