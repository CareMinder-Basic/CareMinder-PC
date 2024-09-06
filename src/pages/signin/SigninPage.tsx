import { Thumbnail, SigninLayout } from "@components/signin";
import { Grid, Link } from "@mui/material";
import RoutePath from "@routes/routePath";

const options = [
  { label: "조무사", id: 1 },
  { label: "의사", id: 1 },
  { label: "직원", id: 1 },
];

export default function SigninPage() {
  return (
    <Grid container>
      <Thumbnail />
      <SigninLayout
        type="main"
        footer={
          <Link href={RoutePath.AdminSignin} variant="h3">
            어드민 계정 로그인
          </Link>
        }
      />
    </Grid>
  );
}
