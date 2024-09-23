import { FC, useState } from "react";
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
  const [options, setOptions] = useState<string[]>(["구역1", "구역2", "구역3", "구역4"]);
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
                  <CComboBox placeholder={"스태프"} options={[]} value={""} onChange={() => null} />
                </ShortComBoxLayout>
              </td>
              <td>
                <ShortComBoxLayout>
                  <CComboBox
                    placeholder={"간호사"}
                    options={["간호사", "의사", "조무사", "직원"]}
                    value={""}
                    onChange={() => null}
                  />
                </ShortComBoxLayout>
              </td>
              <td>
                <LongComBoxLayout>
                  <CComboBox
                    placeholder={"구역"}
                    options={options}
                    value={""}
                    onChange={() => null}
                    allowCustomInput={true}
                    onCustomInputAdd={newValue => {
                      setOptions([...options, newValue]);
                    }}
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
