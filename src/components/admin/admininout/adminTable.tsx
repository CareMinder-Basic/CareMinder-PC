import { FC } from "react";
import styled from "@emotion/styled";
import palette from "@styles/palette";
import { CComboBox } from "@components/common/atom/C-ComboBox";
import CInput from "@components/common/atom/C-Input";
const columns = [
  { field: "Section", headerName: "구역" },
  { field: "TableName", headerName: "태블릿 이름" },
  { field: "PatientName", headerName: "환자 이름" },
];

const rows = [
  { id: 1, Section: "Snow", TableName: "Jon", PatientName: 35 },
  { id: 1, Section: "Snow", TableName: "Jon", PatientName: 35 },
  { id: 1, Section: "Snow", TableName: "Jon", PatientName: 35 },
  { id: 1, Section: "Snow", TableName: "Jon", PatientName: 35 },
  { id: 1, Section: "Snow", TableName: "Jon", PatientName: 35 },
  { id: 1, Section: "Snow", TableName: "Jon", PatientName: 35 },
  { id: 1, Section: "Snow", TableName: "Jon", PatientName: 35 },
  { id: 1, Section: "Snow", TableName: "Jon", PatientName: 35 },
  { id: 1, Section: "Snow", TableName: "Jon", PatientName: 35 },
  { id: 1, Section: "Snow", TableName: "Jon", PatientName: 35 },
];

const AdminTable: FC = () => {
  return (
    <StTable>
      <thead>
        {columns.map(column => {
          return <th>{column.headerName}</th>;
        })}
      </thead>
      <tbody>
        {rows.map(row => {
          return (
            <tr>
              <td>
                <ComBoxLayout>
                  <CComboBox placeholder={"구역"} options={[]} />
                </ComBoxLayout>
              </td>
              <td>
                <ComBoxLayout>
                  <CInput variant={"outlined"}></CInput>
                </ComBoxLayout>
              </td>
              <td>
                <ComBoxLayout>
                  <CInput variant={"outlined"}></CInput>
                </ComBoxLayout>
              </td>
            </tr>
          );
        })}
      </tbody>
    </StTable>
  );
};

export default AdminTable;

const StTable = styled.table`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid ${palette.divider};
  & thead {
    width: 100%;
    height: 20%;

    & th {
      padding-bottom: 11.52px;
      color: ${palette.text.primary};
      border-bottom: 1px solid ${palette.divider};
    }
  }

  & tbody {
    width: 100%;

    & tr > td {
      padding-bottom: 11.52px;
      padding-top: 11.52px;
      text-align: center;
    }
  }
`;

const ComBoxLayout = styled.div`
  width: 224px;
  height: 36px;
  margin: 0 auto;
`;
