import { Stack, styled } from "@mui/material";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import { roleColor } from "@utils/homePage";
import { useState } from "react";
import { ChatBox } from "@components/home";
import { ReactComponent as SendIcon } from "@/assets/completedRequests/send.svg";
import { ReactComponent as CheckIcon } from "@/assets/homeIcons/check.svg";
import { StaffListBoxProps } from "@models/home";

function CompletedPatientListBox({ isAccept, data }: StaffListBoxProps) {
  const roleColorPick = roleColor(data.role);

  const [isOptions, setIsOptions] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const onOptionOnOff = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isOptions || isEdit) {
      setIsEdit(false);
      setIsOptions(false);
    } else if (!isOptions && !isEdit) {
      setIsOptions(true);
    }
  };

  return (
    <InnerContainer color={roleColorPick.light}>
      <Title color={roleColorPick.dark} tabIndex={0} onBlur={() => setIsOptions(false)}>
        <div>{data.place}</div>
        <div>
          <MoreHorizRoundedIcon
            onClick={onOptionOnOff}
            sx={{ color: "#C4C5CC", cursor: "pointer" }}
          />
          {isOptions && (
            <Options>
              <Option>복원하기</Option>

              <Option>퇴원 처리하기</Option>
            </Options>
          )}
        </div>
      </Title>
      <Bottom>
        <TxtBox>
          <TxtBoxLeft>
            {data.isNew && <SmallCheck color={roleColorPick.dark}>N</SmallCheck>}
            {data.request}
          </TxtBoxLeft>
          <TxtBoxRight>{data.time}분전</TxtBoxRight>
        </TxtBox>
        {isAccept && (
          <Check color={roleColorPick.dark}>
            <CheckIcon />
          </Check>
        )}
      </Bottom>
      {isAccept && (
        <ChatContainer>
          <ChatBox leftorRight="right" />
          <ChatBox leftorRight="left" />
          <ChatInputWrapper>
            <input placeholder="메세지를 입력해 주세요" />
            <CustomSendIcon />
          </ChatInputWrapper>
        </ChatContainer>
      )}
    </InnerContainer>
  );
}
export default CompletedPatientListBox;

const InnerContainer = styled(Stack)<{ color: string }>`
  border-radius: 12px;
  background-color: ${({ color }) => color};
  width: 100%;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  cursor: pointer;
`;

const Title = styled("div")<{ color: string }>`
  font-weight: 700;
  font-size: 14px;
  color: ${({ color }) => color};
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  padding-right: 5px;
  position: relative;
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

const SmallCheck = styled("div")<{ color: string }>`
  background-color: ${({ color }) => color};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  padding-top: 2px;
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
  padding: 30px 0 12px 0;
`;
const Options = styled("div")`
  background-color: ${({ theme }) => theme.palette.primary.contrastText};
  position: absolute;
  top: 20px;
  right: 0px;
  padding: 11px;
  box-shadow: 0px 4px 12px 0px #89898e4d;
  border-radius: 8px;
  & > div:first-of-type {
    border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  }
  & > span {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.palette.primary.dark};
  }
`;
const Option = styled("div")`
  font-size: 13px;
  color: ${({ theme }) => theme.palette.primary.dark};
  font-weight: 500;
  padding: 8px 0;
  cursor: pointer;
  width: 69px;
  :hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
const ChatInputWrapper = styled("div")`
  position: relative;
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.palette.primary.contrastText};
  margin-top: 30px;
  & > input {
    width: 100%;
    border-radius: 100px;
    padding: 8px 45px 8px 16px;
    border: none;
    outline: none;
    font-size: 14px;
  }
`;
const CustomSendIcon = styled(SendIcon)`
  position: absolute;
  top: 21px;
  right: 12px;
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
