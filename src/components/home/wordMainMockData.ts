import { PatientListBoxType } from "@components/common/patientListBox";

interface WaitPatientMockData {
  mainWait: PatientListBoxType[];
  mainAccept: PatientListBoxType[];
  staffWait: PatientListBoxType[];
  staffAccept: PatientListBoxType[];
  completedRequest: PatientListBoxType[];
}
export const waitPatientmockData: WaitPatientMockData = {
  mainWait: [
    {
      id: 1,
      place: "경증 환자실 (T13)",
      request: "진통제를 추가적으로 받을 수 있나요?",
      time: "3",
      role: "nerse",
    },
    {
      id: 2,
      place: "경증 환자실 (T13)",
      request: "진통제를 추가적으로 받을 수 있나요?",
      time: "3",
      role: "assistant",
    },
  ],
  mainAccept: [
    {
      id: 1,
      place: "경증 환자실 (T13)",
      request: "진통제를 추가적으로 받을 수 있나요?",
      time: "3",
      role: "nerse",
      isNew: false,
    },
    {
      id: 2,
      place: "경증 환자실 (T13)",
      request: "진통제를 추가적으로 받을 수 있나요?",
      time: "3",
      role: "staff",
      isNew: true,
    },
  ],
  staffWait: [
    {
      id: 1,
      place: "경증 환자실 (T13)",
      request: "진통제를 추가적으로 받을 수 있나요?",
      time: "3",
      role: "nerse",
    },
    {
      id: 2,
      place: "경증 환자실 (T13)",
      request: "진통제를 추가적으로 받을 수 있나요?",
      time: "3",
      role: "assistant",
    },
  ],
  staffAccept: [
    {
      id: 1,
      place: "경증 환자실 (T13)",
      request: "진통제를 추가적으로 받을 수 있나요?",
      time: "3",
      role: "nerse",
      isNew: false,
    },
    {
      id: 2,
      place: "경증 환자실 (T13)",
      request: "진통제를 추가적으로 받을 수 있나요?",
      time: "3",
      role: "staff",
      isNew: true,
    },
  ],
  completedRequest: [
    {
      id: 1,
      place: "경증 환자실 (T13)",
      request: "진통제를 추가적으로 받을 수 있나요?",
      time: "3",
      role: "nerse",
    },
    {
      id: 2,
      place: "경증 환자실 (T13)",
      request: "진통제를 추가적으로 받을 수 있나요?",
      time: "3",
      role: "staff",
    },
    {
      id: 3,
      place: "경증 환자실 (T13)",
      request: "진통제를 추가적으로 받을 수 있나요?",
      time: "3",
      role: "staff",
    },
    {
      id: 4,
      place: "경증 환자실 (T13)",
      request: "진통제를 추가적으로 받을 수 있나요?",
      time: "3",
      role: "staff",
    },
  ],
};
