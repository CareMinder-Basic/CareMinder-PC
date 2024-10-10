import { SigninFormData } from "@models/signin";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/utils/axios/axiosInstance";
import Cookies from "js-cookie";
import { useSetRecoilState } from "recoil";
import { userState } from "@libraries/recoil";

const signin = async (useInfo: SigninFormData) => {
  const res = await axiosInstance.post("/staff/login", useInfo);

  if (res.data.accessToken) {
    Cookies.set("accessToken", res.data.accessToken);
  }
  return res.data;
};

export default function useSignin() {
  const setUserState = useSetRecoilState(userState);
  return useMutation({
    mutationFn: signin,
    onSuccess: res => {
      console.log("로그인 성공");
      setUserState({
        id: res.id,
        name: res.name,
        type: res.type,
      });
    },
    onError: error => {
      console.error("로그인 실패:", error);
    },
  });
}

/**
 * No description
 *
 * @tags useSignIn
 * @name AppControllerInitialize
 * @summary 로그인 요청
 * @request POST:
 * @secure /staff/sign-up
 */
