import { Thumbnail, SigninLayout } from "@components/signin";
import { Grid, Link } from "@mui/material";
import RoutePath from "@routes/routePath";
import CButton from "@components/common/C-Button";

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

      <CButton buttonType="primary">동의합니다.</CButton>
      <CButton buttonType="primaryWhite">취소</CButton>
      <CButton buttonType="primarySpaureLong">버튼 추가</CButton>
      <CButton buttonType="primarySpaure">포스팅 버튼</CButton>
      <CButton buttonType="primarySpaureWhite">하이퍼 링크 버튼</CButton>
      <CButton buttonType="login">Login</CButton>
      <CButton buttonType="login" disabled>
        Login
      </CButton>
    </Grid>
  );
}
