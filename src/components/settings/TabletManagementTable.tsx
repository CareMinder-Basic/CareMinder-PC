import { FC } from "react";
import styled from "@emotion/styled";
import palette from "@styles/palette";
import { CComboBox } from "@components/common/atom/C-ComboBox";
import CInput from "@components/common/atom/C-Input";

import { ReactComponent as Leave } from "@/assets/Leave.svg";
import { ReactComponent as Sleep } from "@/assets/sleep.svg";

const columns = [
  { field: "Section", headerName: "구역" },
  { field: "TabletName", headerName: "태블릿 이름" },
  { field: "PatientName", headerName: "환자 이름" },
];

const rows = [
  { id: 1, Section: "Snow", TableName: "Jon", PatientName: 35 },
  { id: 2, Section: "Snow", TableName: "Jon", PatientName: 35 },
  { id: 3, Section: "Snow", TableName: "Jon", PatientName: 35 },
  { id: 4, Section: "Snow", TableName: "Jon", PatientName: 35 },
  { id: 5, Section: "Snow", TableName: "Jon", PatientName: 35 },
  { id: 6, Section: "Snow", TableName: "Jon", PatientName: 35 },
  { id: 7, Section: "Snow", TableName: "Jon", PatientName: 35 },
  { id: 8, Section: "Snow", TableName: "Jon", PatientName: 35 },
  { id: 9, Section: "Snow", TableName: "Jon", PatientName: 35 },
];

const TabletManagementTable: FC = () => {
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
                  <CInput
                    variant={"outlined"}
                    placeholder={"태블릿이름"}
                    onChange={() => null}
                    value={""}
                    disabled={false}
                    id={""}
                  ></CInput>
                  <TabletButtonLayout>
                    <Leave />
                    <Sleep />
                  </TabletButtonLayout>
                </ComBoxLayout>
              </td>
              <td>
                <ComBoxLayout>
                  <CInput
                    variant={"outlined"}
                    placeholder={"환자 이름"}
                    onChange={() => null}
                    value={""}
                    disabled={false}
                    id={""}
                  ></CInput>
                </ComBoxLayout>
              </td>
            </tr>
          );
        })}
      </tbody>
    </StTable>
  );
};

export default TabletManagementTable;

const StTable = styled.table`
  width: 100%;
  height: 100%;
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
      border-bottom: 1px solid ${palette.divider};
    }
  }
`;

const ComBoxLayout = styled.div`
  position: relative;
  width: 224px;
  height: 36px;
  margin: 0 auto;
`;

const TabletButtonLayout = styled.div`
  position: absolute;
  top: 4px;
  right: -70px;

  display: flex;
  gap: 5px;
`;
