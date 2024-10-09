import { atom } from "recoil";

const settingsLoginState = atom<boolean>({
  key: "settingsLoginState",
  default: true,
});

export default settingsLoginState;
