import { useMutation, UseMutationResult } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { NewAdminUser } from "@models/user";

const createAdmin = async (data: NewAdminUser): Promise<void> => {
  return (await axios.post("admin/create", data)).data;
};

export default function useCreateAdmin(): UseMutationResult<void, AxiosError, NewAdminUser> {
  return useMutation({ mutationFn: createAdmin });
}
