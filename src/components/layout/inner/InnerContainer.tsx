import layoutState from "@libraries/recoil/layout";
import { Stack, styled } from "@mui/material";
import { SwitchCase } from "@toss/react";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";

export default function InnerContainer() {
  const layout = useRecoilValue(layoutState);
  return (
    <SwitchCase
      value={layout as string}
      caseBy={{
        home: (
          <InnerHomeContainer>
            <Outlet />
          </InnerHomeContainer>
        ),
        other: (
          <InnerOtherContainer>
            <Outlet />
          </InnerOtherContainer>
        ),
      }}
    />
  );
}

const InnerHomeContainer = styled(Stack)(({ theme }) => ({
  margin: "30px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: theme.spacing(3),
}));

const InnerOtherContainer = styled(Stack)(({ theme }) => ({
  margin: "30px",
  padding: "30px",
  borderRadius: "24px",
  backgroundColor: theme.palette.background.paper,
}));
