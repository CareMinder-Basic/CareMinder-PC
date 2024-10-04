import { SwitchCase } from "@toss/react";

import StaffPatientListBox from "./staff/StaffpatientListBox";
import { roleProps } from "@utils/homePage";
import MainPatientListBox from "./main/MainpatientListBox";
import CompletedPatientListBox from "./completedRequest/CompletedpatientListBox";

export type PatientListBoxType = {
  id: number;
  place: string;
  request: string;
  time: string;
  role: roleProps;
  isNew?: boolean;
};
type UserType = {
  user:
    | "mainWait"
    | "mainAccept"
    | "staffWait"
    | "staffAccept"
    | "completedRequest"
    | "completedRequestFocus";
  data: PatientListBoxType;
  onClickEvent: (id: number, type: "check" | "okay") => void;
};

export default function PatientBox({ user, data, onClickEvent }: UserType) {
  // props로 user 'mainWait' | 'mainAccept' | 'staffWait' | 'staffAccept' 로 분리

  return (
    <>
      <SwitchCase
        value={user}
        caseBy={{
          mainWait: (
            <MainPatientListBox isAccept={false} data={data} onCheckOrOkay={onClickEvent} />
          ),
          mainAccept: (
            <MainPatientListBox isAccept={true} data={data} onCheckOrOkay={onClickEvent} />
          ),
          staffWait: <StaffPatientListBox isAccept={false} data={data} />,
          staffAccept: <StaffPatientListBox isAccept={true} data={data} />,
          completedRequest: <CompletedPatientListBox isAccept={false} data={data} />,
          completedRequestFocus: <CompletedPatientListBox isAccept={true} data={data} />,
        }}
      />
    </>
  );
}
