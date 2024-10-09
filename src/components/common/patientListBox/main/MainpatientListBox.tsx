import { Stack, styled } from "@mui/material";
import { roleColor } from "@utils/homePage";
import { ReactComponent as CheckIcon } from "@/assets/homeIcons/check.svg";
import { MainListBoxProps } from "@models/home";

function MainPatientListBox({ isAccept, data, onWaitOrAccept }: MainListBoxProps) {
  const roleColorPick = roleColor(data.role);

  return (
    <InnerContainer color={roleColorPick.light}>
      <Title color={roleColorPick.dark}>{data.place}</Title>
      <Bottom>
        <TxtBox>
          <TxtBoxLeft>{data.content}</TxtBoxLeft>
          <TxtBoxRight>
            {data.isNew && <SmallCheck color={roleColorPick.dark}>N</SmallCheck>}
            <span>{data.createdAt}분전</span>
          </TxtBoxRight>
        </TxtBox>
        <Check
          color={roleColorPick.dark}
          onClick={() => onWaitOrAccept(data.patientRequestId, isAccept ? "accept" : "wait")}
        >
          {isAccept ? "OK" : <CheckIcon style={{ cursor: "pointer" }} />}
        </Check>
      </Bottom>
    </InnerContainer>
  );
}
export default MainPatientListBox;

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
  text-align: right;
  justify-content: end;
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
  justify-content: center;
  padding-top: 1px;
  margin-bottom: 2px;
  margin-right: 6px;
  font-size: 13px;
  border-top: 1px solid ${({ theme }) => theme.palette.primary.contrastText};
  font-weight: 900;
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;
