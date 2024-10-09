import { PatientListBoxType } from "@models/home";

type WaitPatientMockData = PatientListBoxType[];

export const waitPatientmockData: WaitPatientMockData = [
  {
    requestStatus: "PENDING",
    content: "환자 요청1",
    tabletId: 1,
    createdAt: "2024-10-09T12:21:10",
    staffId: null,
    patientRequestId: 1,
    place: "병동1",
    role: "staff",
  },
  {
    requestStatus: "PENDING",
    content: "환자 요청2",
    tabletId: 1,
    createdAt: "2024-10-09T12:21:10",
    staffId: 3,
    patientRequestId: 2,
    place: "병동1",
    role: "staff",
  },
  {
    requestStatus: "PENDING",
    content: "환자 요청1",
    tabletId: 2,
    createdAt: "2024-10-09T12:21:10",
    staffId: null,
    patientRequestId: 3,
    place: "병동1",
    role: "staff",
  },
  {
    requestStatus: "PENDING",
    content: "환자 요청2",
    tabletId: 2,
    createdAt: "2024-10-09T12:21:10",
    staffId: null,
    patientRequestId: 4,
    place: "병동1",
    role: "staff",
  },
];

//장소 없음
//role이없음 간호사인지 의사꺼인지 확인이 필요함
