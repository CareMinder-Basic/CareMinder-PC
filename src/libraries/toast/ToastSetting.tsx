import { Theme, ToastContainer, ToastPosition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ToastOptions = {
  position: ToastPosition;
  autoCloseTime: number;
  theme: Theme;
};

const Config: ToastOptions = {
  position: "bottom-left",
  autoCloseTime: 5000,
  theme: "light",
};

export default function ToastSetting() {
  return (
    <ToastContainer
      position={Config.position}
      autoClose={Config.autoCloseTime}
      theme={Config.theme}
      hideProgressBar={false}
      newestOnTop={false}
      rtl={false}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
}
