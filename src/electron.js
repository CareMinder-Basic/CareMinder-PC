import { config } from "dotenv";
import { app, BrowserWindow } from "electron";
import { dirname, join } from "path";
import { fileURLToPath, format } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

config({ path: join(__dirname, "../.env") });
const isDev = process.env.VITE_IS_DEV === "true";

function createWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL(
    isDev
      ? "http://localhost:5173"
      : format({
          pathname: join(__dirname, "../build/index.html"),
          protocol: "file:",
          slashes: true,
        }),
  );
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
