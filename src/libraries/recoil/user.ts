import { v4 as uuidv4 } from "uuid";
import { User } from "@models/user";
import { atom } from "recoil";

const userState = atom<User | null>({
  key: `userState${uuidv4()}`,
  default: null,
});

export default userState;
