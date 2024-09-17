export type roleProps = "nerse" | "assistant" | "staff" | "doctor";

export function roleColor(role: roleProps) {
  const select = {
    nerse: {
      dark: "#30B4FF",
      light: "#D6F0FF",
    },
    assistant: {
      dark: "#F24679",
      light: "#FCDAE4",
    },
    staff: {
      dark: "#5D6DBE",
      light: "#DCE2FF",
    },
    doctor: {
      dark: "#5E5F65",
      light: "#E8E8E9",
    },
  };

  return select[role];
}
