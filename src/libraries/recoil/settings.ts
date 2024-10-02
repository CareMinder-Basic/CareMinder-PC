import { atom } from "recoil";

const settingsLoginState = atom<boolean>({
  key: "settingsLoginState",
  default: false,
});

export default settingsLoginState;
