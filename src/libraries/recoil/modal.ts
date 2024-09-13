import { atom } from "recoil";

const modalState = atom<boolean>({
  key: "main-settings-modal",
  default: true,
});

export default modalState;
