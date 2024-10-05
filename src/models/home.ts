import { roleProps } from "@utils/homePage";

export type UserTypes = {
  user:
    | "mainWait"
    | "mainAccept"
    | "staffWait"
    | "staffAccept"
    | "completedRequest"
    | "completedRequestFocus";
  data: PatientListBoxType;
  onWaitOrAccept?: (id: number, type: "wait" | "accept") => void;
};

export type PatientListBoxType = {
  id: number;
  place: string;
  request: string;
  time: string;
  role: roleProps;
  isNew?: boolean;
};

export type MainListBoxProps = {
  isAccept: boolean;
  data: PatientListBoxType;
  onWaitOrAccept: (id: number, type: "wait" | "accept") => void;
};

export type StaffListBoxProps = {
  isAccept: boolean;
  data: PatientListBoxType;
};

export type CSwitchType = React.ChangeEvent<HTMLInputElement>;
