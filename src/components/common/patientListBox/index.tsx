import { SwitchCase } from "@toss/react";

import StaffPatientListBox from "./staff/StaffpatientListBox";
import MainPatientListBox from "./main/MainpatientListBox";
import CompletedPatientListBox from "./completedRequest/CompletedpatientListBox";
import { UserType } from "@models/home";

export default function PatientBox({ user, data, onWaitOrAccept }: UserType) {
  // props로 user 'mainWait' | 'mainAccept' | 'staffWait' | 'staffAccept' 로 분리

  return (
    <>
      <SwitchCase
        value={user}
        caseBy={{
          mainWait: (
            <MainPatientListBox isAccept={false} data={data} onWaitOrAccept={onWaitOrAccept!} />
          ),
          mainAccept: (
            <MainPatientListBox isAccept={true} data={data} onWaitOrAccept={onWaitOrAccept!} />
          ),
          staffWait: (
            <StaffPatientListBox isAccept={false} data={data} onWaitOrAccept={onWaitOrAccept!} />
          ),
          staffAccept: (
            <StaffPatientListBox isAccept={true} data={data} onWaitOrAccept={onWaitOrAccept!} />
          ),
          completedRequest: <CompletedPatientListBox isAccept={false} data={data} />,
          completedRequestFocus: <CompletedPatientListBox isAccept={true} data={data} />,
        }}
      />
    </>
  );
}
