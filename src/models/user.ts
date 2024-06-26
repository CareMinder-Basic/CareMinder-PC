export type UserType = "admin" | "main" | "staff";

export type User = {
  id: number;
  name: string;
  type: UserType;
};

export default User;
