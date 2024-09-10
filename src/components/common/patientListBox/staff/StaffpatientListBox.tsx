import { Stack, styled } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { ChatBox } from "@components/home";

type StaffListBoxProps = {
  isAccept: boolean;
};

function StaffPatientListBox({ isAccept }: StaffListBoxProps) {
  /**
   * props
   * 1. isAccept 수락인지 아닌지.
   * 2. 각 데이터
   *
   */

  const select = {
    Nurse: {
      dark: "#30B4FF",
      light: "#D6F0FF",
    },
    Nurse1: {
      dark: "#F24679",
      light: "#FCDAE4",
    },
    Nurse2: {
      dark: "#5D6DBE",
      light: "#DCE2FF",
    },
    Nurse3: {
      dark: "#5E5F65",
      light: "#E8E8E9",
    },
  };

  return (
    <InnerContainer color={"#D6F0FF"}>
      <Title color={"#30B4FF"}>
        <div>경증환자실1 (T13)</div>
        <MoreHorizRoundedIcon sx={{ color: "#C4C5CC" }} />
      </Title>
      <Bottom>
        <TxtBox>
          <TxtBoxLeft>
            <SmallCheck color={"#30B4FF"}>N</SmallCheck>
            진통제를 추가적으로 받을 수 있나요?진통제를 추가적으로 받을 수 있나요?
          </TxtBoxLeft>
          <TxtBoxRight>33분전</TxtBoxRight>
        </TxtBox>
        <Check color={"#30B4FF"}>
          {isAccept ? <CheckRoundedIcon /> : <ArrowForwardRoundedIcon />}
        </Check>
      </Bottom>

      <ChatContainer>
        <ChatBox leftorRight="right" />
      </ChatContainer>
    </InnerContainer>
  );
}
export default StaffPatientListBox;

const InnerContainer = styled(Stack)<{ color: string }>`
  border-radius: 12px;
  background-color: ${({ color }) => color};
  width: 100%;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

const Title = styled("div")<{ color: string }>`
  font-weight: 700;
  font-size: 14px;
  color: ${({ color }) => color};
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  padding-right: 5px;
`;
const TxtBox = styled("div")`
  border-radius: 6px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary.contrastText};
  padding: 6px 16px 6px 16px;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.primary.dark};
  display: flex;
  justify-content: space-between;
`;
const TxtBoxLeft = styled("div")`
  display: flex;
  align-items: center;
`;
const TxtBoxRight = styled("div")`
  color: ${({ theme }) => theme.palette.text.primary};
  min-width: 60px;
  text-align: end;
`;
const Bottom = styled("div")`
  display: flex;
  width: 100%;
  align-items: end;
  justify-content: space-between;
`;
const Check = styled("div")<{ color: string }>`
  background-color: ${({ color }) => color};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
  font-weight: 900;
`;
const SmallCheck = styled("div")<{ color: string }>`
  background-color: ${({ color }) => color};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  padding-top: 1px;
  justify-content: center;
  margin-right: 6px;
  font-size: 13px;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  font-weight: 900;
  margin-bottom: 2px;
`;

const ChatContainer = styled("div")`
  border-top: 1px solid ${({ theme }) => theme.palette.primary.contrastText};
  margin-top: 12px;
`;
