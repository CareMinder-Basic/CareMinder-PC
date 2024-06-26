import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { UserType } from "@models/index";
import { userState } from "@libraries/recoil";
import { Box, CircularProgress } from "@mui/material";

type AuthorizedRouteProps = {
  allowedRoles: UserType[];
};

export default function AuthorizedRoute({ allowedRoles }: AuthorizedRouteProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const user = useRecoilValue(userState);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (user && allowedRoles.includes(user.type)) {
      setIsChecking(false);
    } else {
      console.error(`접근이 불가능한 경로입니다. (접근 경로: ${pathname}, 권한: ${user?.type})`);
      navigate(-1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, allowedRoles]);

  if (isChecking) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" padding="30px">
        <CircularProgress />
      </Box>
    );
  }

  return <Outlet />;
}
