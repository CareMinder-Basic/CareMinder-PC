import { CComboBox } from "@components/common/atom/C-ComboBox";
import CSwitch from "@components/common/atom/C-Switch";
import PatientBox from "@components/common/patientListBox";
import { waitPatientmockData } from "@components/home/wordMainMockData";
import { userState } from "@libraries/recoil";
import layoutState from "@libraries/recoil/layout";
import { CSwitchType } from "@models/home";
import { Box, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

export default function MainHomePage() {
  const navigate = useNavigate();
  const setlayoutState = useSetRecoilState(layoutState);
  const [userStatus] = useRecoilState(userState);
  const [mainWaitIsMine, setMainWaitIsMine] = useState<boolean>(false); //대기중인 내 환자 보기
  const [mainAcceptIsGroup, setMainAcceptIsGroup] = useState<boolean>(false); //수락중인 환자, 환자별로 묶기

  const onWaitOrAccept = (id: number, type: "wait" | "accept") => {
    //onCheckOrOkay fn은 check버튼인지 okay버튼인지와 그 게시글의 id를 가져온다.
    console.log(id, type);
  };

  useEffect(() => {
    setlayoutState("home");

    switch (userStatus?.type) {
      case "main":
        navigate("/");
        break;
      case "staff":
        navigate("/staff");
        break;
    }
  }, [setlayoutState]);

  return (
    <>
      <>
        <LeftSection>
          <Title>대기중인 환자</Title>
          <SubTitle>
            <SubTitleLeft>
              <span>내 환자만 보기</span>
              <CSwitch onChange={(el: CSwitchType) => setMainWaitIsMine(el.target.checked)} />
            </SubTitleLeft>
            <SubTitleRight>
              <span>직종</span>
              <CComboBox
                placeholder={"전체"}
                options={["테스트1", "테스트2"]}
                value={""}
                onChange={() => null}
              />
            </SubTitleRight>
          </SubTitle>
          {waitPatientmockData.map(el => (
            <PatientBox
              key={el.patientRequestId}
              user="mainWait"
              data={el}
              onWaitOrAccept={onWaitOrAccept}
            />
          ))}
        </LeftSection>
        <RightSection>
          <Title>수락중인 환자</Title>
          <SubTitle>
            <SubTitleLeft>
              <span>환자별로 묶기</span>
              <CSwitch onChange={(el: CSwitchType) => setMainAcceptIsGroup(el.target.checked)} />
            </SubTitleLeft>
          </SubTitle>
          {waitPatientmockData.map(el => (
            <PatientBox
              key={el.patientRequestId}
              user="mainAccept"
              data={el}
              onWaitOrAccept={onWaitOrAccept}
            />
          ))}
        </RightSection>
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
const Title = styled("div")`
  font-weight: 700;
  font-size: 24px;
  color: #000000;
  margin-bottom: 26px;
`;
const SubTitle = styled("div")`
  font-weight: 500;
  font-size: 18px;
  color: #000000;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SubTitleLeft = styled("div")`
  & > span {
    margin-right: 18px;
  }
`;
const SubTitleRight = styled("div")`
  display: flex;
  align-items: center;
  height: 35px;
  & > * {
    font-size: 14px;
  }
  & > span {
    width: 40px;
    margin-right: 12px;
  }
`;
