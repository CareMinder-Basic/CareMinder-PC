import { Button } from "@mui/material";
import { ReactComponent as SignOut } from "@assets/signout.svg";

export default function SignOutButton() {
  // Todo: 로그아웃

  return (
    <Button variant="text" startIcon={<SignOut />}>
      로그아웃
    </Button>
  );
}
