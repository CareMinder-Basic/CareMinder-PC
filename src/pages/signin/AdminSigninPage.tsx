import { Thumbnail, CreateAdminButton, SigninLayout } from "@components/signin";
import { Grid, Link } from "@mui/material";
import RoutePath from "@routes/routePath";

export default function AdminSigninPage() {
  return (
    <Grid container>
      <Thumbnail isAdmin />
      <SigninLayout
        type="admin"
        footer={
          <Link href={RoutePath.Signin} variant="h3">
            병동 계정 로그인
          </Link>
        }
        options={<CreateAdminButton />}
      />
    </Grid>
  );
}
