import { SigninFormData } from "@models/signin";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const signin = async (data: SigninFormData) => {
  return (await axios.post("/sign-in", data)).data;
};

export default function useSignin() {
  return useMutation({ mutationFn: signin });
}
