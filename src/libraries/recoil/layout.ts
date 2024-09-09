import { atom } from "recoil";

const layoutState = atom<string | null>({
  key: "layout",
  default: "other",
});

export default layoutState;
