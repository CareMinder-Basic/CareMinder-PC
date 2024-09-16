import { FC } from "react";
import styled from "@emotion/styled";
import palette from "@styles/palette";
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
              <td>{row.Section}</td>
              <td>{row.TableName}</td>
              <td>{row.PatientName}</td>
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

  & thead {
    width: 100%;
    height: 20%;

    & th {
      padding-bottom: 11.52px;
      padding-top: 11.52px;
      color: ${palette.text.primary};
      border-bottom: 1px solid ${palette.divider};
    }
  }

  & tbody {
    width: 100%;
    & tr {
      & td {
        text-align: center;
        padding-bottom: 11.52px;
        padding-top: 11.52px;
      }
    }
  }
`;
