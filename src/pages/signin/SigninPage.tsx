import { Thumbnail, SigninLayout } from "@components/signin";
import { Grid, Link } from "@mui/material";
import RoutePath from "@routes/routePath";
import CSwitch from "@components/common/atom/C-Switch";

export default function SigninPage() {
  return (
    <Grid container>
      {/* <Thumbnail />
      <SigninLayout
        type="main"
        footer={
          <Link href={RoutePath.AdminSignin} variant="h3">
            어드민 계정 로그인
          </Link>
        }
      /> */}
      {<CSwitch />}
    </Grid>
  );
}
