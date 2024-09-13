import { v4 as uuidv4 } from "uuid";
import { User } from "@models/user";
import { atom } from "recoil";

const userState = atom<User | null>({
  key: `userState${uuidv4()}`,
  default: { id: 111, name: "테스트계정", type: "staff" },
});

export default userState;
