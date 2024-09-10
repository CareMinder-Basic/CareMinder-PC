import { SwitchCase } from "@toss/react";
import WordPatientListBox from "./word/WordpatientListBox";
import StaffPatientListBox from "./staff/StaffpatientListBox";

export default function PatientBox() {
  // props로 user를 보내면 된다 ex. wardWait
  const user: string = "wardWait"; // 'wardWait' | 'wardAccept' | 'staffWait' | 'staffAccept' 로 분리

  return (
    <>
      <SwitchCase
        value={user}
        caseBy={{
          wardWait: <WordPatientListBox isAccept={false} />,
          wardAccept: <WordPatientListBox isAccept={true} />,
          staffWait: <StaffPatientListBox isAccept={false} />,
          staffAccept: <StaffPatientListBox isAccept={true} />,
        }}
      />
    </>
  );
}
