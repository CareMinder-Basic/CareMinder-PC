import { atom } from "recoil";

const modalState = atom<boolean>({
  key: "main-settings-modal",
  default: false,
});

export default modalState;
