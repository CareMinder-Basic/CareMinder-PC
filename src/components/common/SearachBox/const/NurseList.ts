export interface Nurse {
  name: string;
}

export const NurseList: Nurse[] = [
  { name: "김믿음 간호사" },
  { name: "김사랑 간호사" },
  { name: "김희망 간호사" },
  { name: "김기쁨 간호사" },
  { name: "김밝음 간호사" },
  { name: "김맑음 간호사" },
  { name: "이사랑 간호사" },
  { name: "이믿음 간호사" },
  { name: "이희망 간호사" },
  { name: "이기쁨 간호사" },
  { name: "이밝음 간호사" },
  { name: "이맑음 간호사" },
  { name: "박믿음 간호사" },
  { name: "박사랑 간호사" },
  { name: "박희망 간호사" },
  { name: "박기쁨 간호사" },
  { name: "박밝음 간호사" },
  { name: "박맑음 간호사" },
  { name: "최믿음 간호사" },
  { name: "최사랑 간호사" },
  { name: "최희망 간호사" },
  { name: "최기쁨 간호사" },
  { name: "최밝음 간호사" },
  { name: "최맑음 간호사" },
];

export async function fetchNurses(query: string): Promise<Nurse[]> {
  return NurseList.filter(nurse => nurse.name.includes(query));
}
