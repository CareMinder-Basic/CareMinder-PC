import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { UserType } from "@models/user";
import { userState } from "@libraries/recoil";
import { Box, CircularProgress } from "@mui/material";
import { useCallbackOnce } from "@toss/react";
import Cookies from "js-cookie";
import axiosInstance from "@/utils/axiosInstance";

type AuthorizedRouteProps = {
  allowedRoles: UserType[];
};

export default function AuthorizedRoute({ allowedRoles }: AuthorizedRouteProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const user = useRecoilValue(userState);
  const [isChecking, setIsChecking] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  const navigatePrev = useCallbackOnce(() => {
    console.error(`접근이 불가능한 경로입니다. (접근 경로: ${pathname}, 권한: ${user?.type})`);
    navigate(-1);
  }, []);

  //유저 타입별 접근 권한
  useEffect(() => {
    //accessToken && refreshToken
    getUser();
    if (isLogin) {
      if (user && allowedRoles.includes(user.type)) {
        setIsChecking(false);
      } else {
        navigatePrev();
      }
    }
  }, [user, allowedRoles, navigatePrev, navigate]);

  const getUser = async () => {
    const accessToken = Cookies.get("accessToken");
    try {
      const res = await axiosInstance.get("/", {
        headers: {
          Authorization: accessToken,
        },
      });
      if (res.data.success) {
        setIsLogin(true);
      }
    } catch {
      alert("로그인이 필요합니다.");
      Cookies.set("accessToken", "");
      setIsLogin(false);
      navigate("/sign-in");
    }
  };
  if (isChecking && isLogin) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" padding="30px">
        <CircularProgress />
      </Box>
    );
  }

  return <Outlet />;
}
