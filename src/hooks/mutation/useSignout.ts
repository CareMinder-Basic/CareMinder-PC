import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/utils/axios/axiosInstance";
import Cookies from "js-cookie";
import { useSetRecoilState } from "recoil";
import { userState } from "@libraries/recoil";

const signOut = async () => {
  const res = await axiosInstance.post("/staff/logout");
  if (res.data.accessToekn && res.data.refreshToken) {
    Cookies.set("accessToekn", "");
    Cookies.set("refreshToekn", "");
  }
  return res.data;
};

export default function useSignOut() {
  const setUserState = useSetRecoilState(userState);
  return useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      console.log("로그아웃 성공");
      setUserState(null);
    },
    onError: error => {
      console.error("로그아웃 실패:", error);
    },
  });
}

/**
 * No description
 *
 * @tags useSignout
 * @name AppControllerInitialize
 * @summary 로그아웃 요청
 * @request POST:
 * @secure /staff/logout
 */
