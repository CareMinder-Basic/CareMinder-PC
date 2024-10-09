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
  tabletId: number;
  staffId: number;
  patientRequestId: number;
  place: string;
  content: string;
  createdAt: string;
  role: roleProps;
  requestStatus: string;
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
