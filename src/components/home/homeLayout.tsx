import { styled } from "@mui/material";
import { waitPatientmockData } from "./wordMainMockData";
import PatientBox from "@components/common/patientListBox";

function HomeLayout() {
  return (
    <>
      <Title>대기중인 환자</Title>
      <SubTitle>
        <span>내 환자만 보기</span> <span>slide</span>
      </SubTitle>
      {waitPatientmockData.map(el => (
        <PatientBox key={el.id} />
      ))}
    </>
  );
}
export default HomeLayout;

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
