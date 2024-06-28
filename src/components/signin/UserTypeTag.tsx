import { UserType } from "@models/user";
import { styled, Typography } from "@mui/material";
import { SwitchCase } from "@toss/react";

type UserTypeProps = {
  type: UserType;
};

export default function UserTypeTag({ type }: UserTypeProps) {
  return (
    <Container variant="h1">
      <SwitchCase
        value={type}
        caseBy={{
          admin: <>어드민</>,
          main: <>병동</>,
          staff: <>스태프</>,
        }}
      />
    </Container>
  );
}

const Container = styled(Typography)(({ theme }) => ({
  marginTop: "60px",
  marginBottom: "30px",
  color: theme.palette.primary.main,
}));
