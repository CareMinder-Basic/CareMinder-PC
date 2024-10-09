import { SigninFormData } from "@models/signin";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { SEVER_URL } from "@/constants/baseUrl";

const signin = async (data: SigninFormData) => {
  return (await axios.post(`${SEVER_URL}/staff/login`, data)).data;
};

export default function useSignin() {
  return useMutation({
    mutationFn: signin,
    onSuccess: () => {
      // Todo: page routing
    },
  });
}
