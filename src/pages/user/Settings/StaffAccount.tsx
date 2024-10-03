import { Box, styled } from "@mui/system";
import CButton from "@components/common/atom/C-Button";
import PaginationComponent from "@components/common/pagination";
import StaffAccountSettingsTable from "@components/settings/StaffAccountSettingsTable";
import { Stack, Typography } from "@mui/material";
import { useBooleanState } from "@toss/react";
import NewStaffModal from "@components/settings/modal/NewStaffModal";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { NewStaff, NewStaffField, QuickRegisterNewStaff } from "@models/staff";
import NewStaffInputField from "@components/settings/NewStaffInputField";
import InfoModal from "@components/settings/modal/InfoModal";
import { useRecoilValue, useSetRecoilState } from "recoil";
import settingsLoginState from "@libraries/recoil/settings";
import modalState from "@libraries/recoil/modal";

// 스태프 계정 설정

const defaultValues: NewStaff = {
  name: "",
  occupation: "",
  username: "",
  password: "",
  phoneNumber: "",
  email: "",
};

const quickRegisters: QuickRegisterNewStaff[] = [
  { label: "NFC", value: "NFC 등록" },
  { label: "지문 입력", value: "지문 등록" },
];

export const StaffAccount = () => {
  const [open, openCreateModal, closeCreateModal] = useBooleanState(false);
  const [openDelete, openDeleteModal, closeDeleteModal] = useBooleanState(false);
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const settingsLogin = useRecoilValue(settingsLoginState);
  const setIsModalOpen = useSetRecoilState(modalState);

  const form = useForm<NewStaff>({
    defaultValues,
    mode: "onChange",
  });

  const { handleSubmit } = form;

  const onSubmit: SubmitHandler<NewStaff> = data => {
    console.log(data);
  };

  const createNewStaff = () => {
    if (settingsLogin) {
      setIsCreate(true);
    } else {
      window.alert("스태프 로그인을 해주세요");
      setIsModalOpen(true);
    }
  };

  const handleLogin = () => {
    window.alert("스태프 로그인을 해주세요");
    setIsModalOpen(true);
  };

  const handleDeleteStaff = () => {
    if (settingsLogin) {
      openDeleteModal();
    } else {
      window.alert("스태프 로그인을 해주세요");
      setIsModalOpen(true);
    }
  };

  return (
    <>
      {isCreate ? (
        <>
          <BodyTitleContainer>
            <Title variant="h1">스태프 계정 생성</Title>
          </BodyTitleContainer>
          <StaffInputLayout>
            <Stack gap={"24px"} style={{ width: "343px" }}>
              {fields.map(field => (
                <NewStaffInputField key={field.name} field={field} form={form} />
              ))}
              <Stack gap={"24px"}>
                {quickRegisters.map(quickReg => (
                  <Stack gap={"3px"}>
                    <Typography variant="h3">{quickReg.label}</Typography>
                    <CButton buttonType="primarySpaureWhite" style={{ height: "50px" }}>
                      {quickReg.value}
                    </CButton>
                  </Stack>
                ))}
              </Stack>
              <ConfirmLayout>
                <CButton
                  buttonType="primaryWhite"
                  onClick={() => setIsCreate(prev => !prev)}
                  style={{ width: "134px", height: "45px" }}
                >
                  이전으로
                </CButton>
                <CButton
                  buttonType="primary"
                  onClick={handleSubmit(onSubmit)}
                  style={{ width: "134px", height: "45px" }}
                >
                  다음
                </CButton>
              </ConfirmLayout>
            </Stack>
          </StaffInputLayout>
        </>
      ) : (
        <>
          {" "}
          <NewStaffModal open={open} onClose={closeCreateModal}></NewStaffModal>
          <InfoModal
            open={openDelete}
            onClose={closeDeleteModal}
            modalType={"checkDeleteStaff"}
          ></InfoModal>
          <BodyTitleContainer>
            <div>
              <Title variant="h1">스태프 계정 수정</Title>
            </div>
            <StaffButtonContainer>
              <CButton buttonType="primarySpaureWhite" onClick={createNewStaff}>
                스태프 계정 생성
              </CButton>
              <CButton
                buttonType="primarySpaureWhite"
                onClick={settingsLogin ? openCreateModal : handleLogin}
              >
                스태프 추가
              </CButton>
            </StaffButtonContainer>
          </BodyTitleContainer>
          <StaffAccountSettingsTable onDelete={handleDeleteStaff} />
          <PaginationContainer>
            <div>
              <PaginationComponent totalPage={5} />
            </div>
          </PaginationContainer>
        </>
      )}
    </>
  );
};

/** utils */

const fields: NewStaffField[] = [
  { name: "name", label: "이름", placeholder: "이름을 입력해주세요." },
  { name: "occupation", label: "직군", placeholder: "의사" },
  { name: "username", label: "아이디", placeholder: "아이디를 입력해주세요." },
  { name: "password", label: "비밀번호", placeholder: "비밀번호를 입력해주세요." },
  { name: "phoneNumber", label: "전화번호", placeholder: "010-0000-0000" },
  { name: "email", label: "이메일", placeholder: "이메일을 입력해주세요." },
];

/** styles */

const BodyTitleContainer = styled(Box)({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "60px 0 40px 0",
});

const StaffButtonContainer = styled(Box)({
  position: "absolute",
  right: "0",
  display: "flex",
  gap: "20px",
  width: "300px",
});

const StaffInputLayout = styled(Box)({
  display: "flex",
  justifyContent: "center",
});

const ConfirmLayout = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "40px",
  marginTop: "20px",
});

const PaginationContainer = styled(Box)({
  marginTop: "60px",
});

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  textTransform: "uppercase",
  lineHeight: "24px",
  letterSpacing: "-3%",
}));
