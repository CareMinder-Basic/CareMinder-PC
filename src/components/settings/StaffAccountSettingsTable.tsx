import { FC } from "react";
import styled from "@emotion/styled";
import palette from "@styles/palette";
import { CComboBox } from "@components/common/atom/C-ComboBox";
import CInput from "@components/common/atom/C-Input";
import { ReactComponent as DeleteButton } from "@/assets/x-circle-fill.svg";

const columns = [
  { field: "StaffName", headerName: "스태프 이름" },
  { field: "Occupation", headerName: "직업" },
  { field: "Section", headerName: "구역" },
  { field: "Password", headerName: "비밀번호" },
  { field: "Phone", headerName: "전화번호" },
  { field: "Email", headerName: "이메일" },
  { field: "Delete", headerName: "" },
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

const StaffAccountSettingsTable: FC = () => {
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
                <ShortComBoxLayout>
                  <CComboBox placeholder={"스태프"} options={[]} />
                </ShortComBoxLayout>
              </td>
              <td>
                <ShortComBoxLayout>
                  <CComboBox
                    placeholder={"간호사"}
                    options={[
                      { label: "간호사", id: 1 },
                      { label: "조무사", id: 2 },
                      { label: "의사", id: 3 },
                      { label: "직원", id: 4 },
                    ]}
                  />
                </ShortComBoxLayout>
              </td>
              <td>
                <LongComBoxLayout>
                  <CComboBox
                    placeholder={"구역"}
                    options={[
                      { label: "구역1", id: 111 },
                      { label: "구역2", id: 112 },
                      { label: "구역3", id: 113 },
                      { label: "구역4", id: 114 },
                      { id: -1, label: "구역 추가" },
                    ]}
                  />
                </LongComBoxLayout>
              </td>
              <td>
                <LongComBoxLayout>
                  <CInput
                    variant={"outlined"}
                    placeholder={"비밀번호"}
                    onChange={() => null}
                    value={""}
                    disabled={false}
                    id={""}
                  ></CInput>
                </LongComBoxLayout>
              </td>
              <td>
                <LongComBoxLayout>
                  <CInput
                    variant={"outlined"}
                    placeholder={"전화번호"}
                    onChange={() => null}
                    value={""}
                    disabled={false}
                    id={""}
                  ></CInput>
                </LongComBoxLayout>
              </td>
              <td>
                <LongComBoxLayout>
                  <CInput
                    variant={"outlined"}
                    placeholder={"이메일"}
                    onChange={() => null}
                    value={""}
                    disabled={false}
                    id={""}
                  ></CInput>
                </LongComBoxLayout>
              </td>
              <td>
                <DeleteLayout>
                  <DeleteButton />
                </DeleteLayout>
              </td>
            </tr>
          );
        })}
      </tbody>
    </StTable>
  );
};

export default StaffAccountSettingsTable;

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

const ShortComBoxLayout = styled.div`
  width: 138px;
  height: 36px;
  margin: 0 auto;
`;

const LongComBoxLayout = styled.div`
  width: 224px;
  height: 36px;
  margin: 0 auto;
`;

const DeleteLayout = styled.div`
  width: 80px;
  height: 36px;
  margin: 0 auto;
`;
