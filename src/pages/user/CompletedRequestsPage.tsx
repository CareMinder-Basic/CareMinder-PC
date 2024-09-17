import CSwitch from "@components/common/atom/C-Switch";
import { styled } from "@mui/material";

export default function CompletedRequestsPage() {
  return (
    <Wrapper>
      <LeftWrapper>
        <Title>완료 요청 히스토리</Title>
        <SubTitle>
          <span>완료된 내 구역 요청 리스트</span> <CSwitch />
          <span>환자별로 보기</span> <CSwitch />
        </SubTitle>
      </LeftWrapper>
      <RightWrapper></RightWrapper>
    </Wrapper>
  );
}
const Wrapper = styled("div")`
  display: flex;
`;
const LeftWrapper = styled("div")`
  width: 50%;
  margin-right: 8px;
`;
const RightWrapper = styled("div")`
  width: 50%;
  margin-left: 8px;
`;
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
  & > * {
    margin-right: 17px;
  }
`;
