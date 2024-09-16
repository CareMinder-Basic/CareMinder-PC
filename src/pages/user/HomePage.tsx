import layoutState from "@libraries/recoil/layout";
import { Box, styled } from "@mui/material";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

export default function HomePage() {
  const setlayoutState = useSetRecoilState(layoutState);

  useEffect(() => {
    setlayoutState("home");
  }, [setlayoutState]);

  return (
    <>
      <>
        <LeftSection>Left Content</LeftSection>
        <RightSection>Right Content</RightSection>
      </>
    </>
  );
}

const SectionBase = styled(Box)(({ theme }) => ({
  width: "calc(50% - 15px)",
  padding: "30px",
  borderRadius: "24px",
  backgroundColor: theme.palette.background.paper,
}));

const LeftSection = styled(SectionBase)({
  // 왼쪽 컨테이너에 스타일 적용
});

const RightSection = styled(SectionBase)({
  // 오른쪽 컨테이너에 스타일 적용
});
