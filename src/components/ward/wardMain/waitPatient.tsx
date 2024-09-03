import { styled } from "@mui/material";
import { CheckBox } from "..";

function WaitPatient() {
  const mockData = [
    {
      id: "1",
      place: "경증 환자실 (T13)",
      request: "진통제를 추가적으로 받을 수 있나요?",
      time: "3분전",
    },
    {
      id: "2",
      place: "경증 환자실 (T13)",
      request: "진통제를 추가적으로 받을 수 있나요?",
      time: "3분전",
    },
    {
      id: "3",
      place: "경증 환자실 (T13)",
      request: "진통제를 추가적으로 받을 수 있나요?",
      time: "3분전",
    },
    {
      id: "4",
      place: "경증 환자실 (T13)",
      request: "진통제를 추가적으로 받을 수 있나요?",
      time: "3분전",
    },
  ];
  return (
    <>
      <Title>대기중인 환자</Title>
      <SubTitle>
        <span>내 환자만 보기</span> <span>slide</span>
      </SubTitle>
      {mockData.map((el, idx) => (
        <CheckBox key={el.id} />
      ))}
    </>
  );
}
export default WaitPatient;

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
`;
