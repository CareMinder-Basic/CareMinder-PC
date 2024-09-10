import { Stack, styled } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

function WordPatientListBox({ isAccept }: { isAccept: boolean }) {
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
      <Title color={select.Nurse.dark}>경증환자실1 (T13)</Title>
      <Bottom>
        <TxtBox>
          <TxtBoxLeft>
            진통제를 추가적으로 받을 수 있나요?진통제를 추가적으로 받을 수 있나요?
          </TxtBoxLeft>
          <TxtBoxRight>
            <SmallCheck color={"#30B4FF"}>N</SmallCheck>
            <span>33분전</span>
          </TxtBoxRight>
        </TxtBox>
        <Check color={"#30B4FF"}>{isAccept ? "OK" : <CheckIcon />}</Check>
      </Bottom>
    </InnerContainer>
  );
}
export default WordPatientListBox;

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
  align-items: center;
  justify-content: space-between;
`;
const TxtBoxLeft = styled("div")``;
const TxtBoxRight = styled("div")`
  color: ${({ theme }) => theme.palette.text.primary};
  min-width: 60px;
  text-align: end;
  display: flex;
  align-items: center;
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
  height: 18px;
  display: flex;
  justify-content: center;
  padding-top: 1px;
  margin-right: 6px;
  font-size: 13px;
  border-top: 1px solid ${({ theme }) => theme.palette.primary.contrastText};
  font-weight: 900;
`;
