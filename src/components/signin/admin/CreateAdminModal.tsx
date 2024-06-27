import { CMModal, CMModalProps, ModalActionButton } from "@components/common";
import InputField from "@components/signin/admin/InputField";
import { useCreateAdmin } from "@hooks/mutation";
import { AdminUserField, NewAdminUser } from "@models/user";
import { Checkbox, Container, FormControlLabel, Stack, styled, Typography } from "@mui/material";
import { SwitchCase } from "@toss/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Step = "어드민 계정 생성 약관 동의서" | "어드민 계정 생성";

const defaultValues: NewAdminUser = {
  name: "",
  hospitalName: "",
  hospitalAddress: "",
  registrationNumber: "",
  username: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  email: "",
};

export default function CreateAdminModal({ onClose, ...props }: CMModalProps) {
  const [step, setStep] = useState<Step>("어드민 계정 생성 약관 동의서");
  const { mutate, isPending } = useCreateAdmin();

  const form = useForm<NewAdminUser>({
    defaultValues,
    mode: "onChange",
  });
  const { handleSubmit } = form;

  const [agreementChecked, setChecked] = useState<boolean>(false);
  const toggle = () => setChecked(prev => !prev);

  const onSubmit: SubmitHandler<NewAdminUser> = data => {
    mutate(data, {
      onSuccess: () => {
        toast.success("어드민 계정 생성이 완료되었습니다.");
        onClose();
      },
      onError: error => {
        toast.error(error.message);
      },
    });
  };

  return (
    <CMModal
      onClose={onClose}
      title={step}
      footer={
        <SwitchCase
          value={step}
          caseBy={{
            ["어드민 계정 생성 약관 동의서"]: (
              <>
                <ModalActionButton color="secondary" onClick={onClose}>
                  취소
                </ModalActionButton>
                <ModalActionButton
                  disabled={!agreementChecked}
                  onClick={() => setStep("어드민 계정 생성")}
                >
                  다음
                </ModalActionButton>
              </>
            ),
            ["어드민 계정 생성"]: (
              <>
                <ModalActionButton
                  color="secondary"
                  onClick={() => setStep("어드민 계정 생성 약관 동의서")}
                >
                  취소
                </ModalActionButton>
                <ModalActionButton disabled={isPending} onClick={handleSubmit(onSubmit)}>
                  추가하기
                </ModalActionButton>
              </>
            ),
          }}
        />
      }
      {...props}
    >
      <SwitchCase
        value={step}
        caseBy={{
          ["어드민 계정 생성 약관 동의서"]: (
            <>
              <AgreementContainer>
                <Typography variant="h4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, soluta consectetur
                  ipsam voluptatem corrupti dicta iure, minus, tenetur nemo necessitatibus
                  asperiores facere deserunt perspiciatis inventore porro eligendi veniam nam.
                  Asperiores.
                </Typography>
              </AgreementContainer>
              <FormControlLabel
                control={<Checkbox checked={agreementChecked || false} onChange={toggle} />}
                label="필수 약관에 동의합니다."
              />
            </>
          ),
          ["어드민 계정 생성"]: (
            <Stack gap={"24px"}>
              {fields.map(field => (
                <InputField key={field.name} field={field} form={form} />
              ))}
            </Stack>
          ),
        }}
      />
    </CMModal>
  );
}

/** utils */

const fields: AdminUserField[] = [
  { name: "name", label: "이름", placeholder: "이름을 입력해주세요." },
  { name: "hospitalName", label: "병원명", placeholder: "병원명을 입력해주세요." },
  { name: "hospitalAddress", label: "병원 주소", placeholder: "병원 주소를 입력해주세요." },
  {
    name: "registrationNumber",
    label: "사업자등록번호",
    placeholder: "사업자등록번호를 입력해주세요.",
  },
  { name: "username", label: "아이디", placeholder: "아이디를 입력해주세요." },
  { name: "password", label: "비밀번호", placeholder: "비밀번호를 입력해주세요." },
  { name: "confirmPassword", label: "비밀번호 확인", placeholder: "비밀번호를 재입력해주세요." },
  { name: "phoneNumber", label: "전화번호", placeholder: "010-0000-0000" },
  { name: "email", label: "이메일", placeholder: "이메일을 입력해주세요." },
];

/** styles */

const AgreementContainer = styled(Container)(({ theme }) => ({
  height: "300px",
  overflow: "auto",
  padding: "16px 24px",
  borderRadius: "24px",
  backgroundColor: theme.palette.secondary.light,
}));
