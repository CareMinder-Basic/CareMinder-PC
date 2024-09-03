import { Stack, styled } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

function CheckBox() {
  return (
    <InnerContainer>
      <Title>경증환자실1 (T13)</Title>
      <Bottom>
        <TxtBox>
          <TxtBoxLeft>
            진통제를 추가적으로 받을 수 있나요?진통제를 추가적으로 받을 수 있나요?
          </TxtBoxLeft>
          <TxtBoxRight>33분전</TxtBoxRight>
        </TxtBox>
        <Check>
          <CheckIcon />
        </Check>
      </Bottom>
    </InnerContainer>
  );
}
export default CheckBox;

const InnerContainer = styled(Stack)(() => ({
  borderRadius: "12px",
  // backgroundColor: theme.palette.background.paper,
  backgroundColor: "#D6F0FF",
  // height: "92px",
  width: "100%",
  padding: "16px 20px",
  display: "flex",
  flexDirection: "column",
  marginBottom: "12px",
}));

const Title = styled("div")`
  font-weight: 700;
  font-size: 14px;
  color: #30b4ff;
  margin-bottom: 8px;
`;
const TxtBox = styled("div")`
  border-radius: 6px;
  width: 100%;
  background-color: #ffffff;
  padding: 6px 16px 6px 16px;
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  display: flex;
  justify-content: space-between;
`;
const TxtBoxLeft = styled("div")``;
const TxtBoxRight = styled("div")`
  color: #5e5f65;
  min-width: 60px;
  text-align: end;
`;
const Bottom = styled("div")`
  display: flex;
  width: 100%;
  align-items: end;
  justify-content: space-between;
`;
const Check = styled("div")`
  background-color: #30b4ff;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
`;
