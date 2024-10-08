export type NewStaff = {
  name: string;
  occupation: string;
  username: string;
  password: string;
  phoneNumber: string;
  email: string;
};

export type NewStaffField = {
  name: keyof NewStaff;
  label: string;
  placeholder: string;
};

export type QuickRegisterNewStaff = {
  label: string;
  value: string;
};
