import { SwitchCase } from "@toss/react";

import StaffPatientListBox from "./staff/StaffpatientListBox";
import { roleProps } from "@utils/homePage";
import MainPatientListBox from "./main/MainpatientListBox";

export type PatientListBoxType = {
  id: number;
  place: string;
  request: string;
  time: string;
  role: roleProps;
  isNew?: boolean;
};
type UserType = {
  user: "mainWait" | "mainAccept" | "staffWait" | "staffAccept";
  data: PatientListBoxType;
};

export default function PatientBox({ user, data }: UserType) {
  // props로 user 'mainWait' | 'mainAccept' | 'staffWait' | 'staffAccept' 로 분리

  return (
    <>
      <SwitchCase
        value={user}
        caseBy={{
          mainWait: <MainPatientListBox isAccept={false} data={data} />,
          mainAccept: <MainPatientListBox isAccept={true} data={data} />,
          staffWait: <StaffPatientListBox isAccept={false} data={data} />,
          staffAccept: <StaffPatientListBox isAccept={true} data={data} />,
        }}
      />
    </>
  );
}