import { Switch, styled, SwitchProps } from "@mui/material";
import { FC } from "react";

export type CustomSwitchProps = {} & SwitchProps;

const CSwitch: FC<CustomSwitchProps> = ({ onChange, checked, value, id, ...props }) => {
  return <StyledSwitch id={id} checked={checked} value={value} onChange={onChange} {...props} />;
};

export default CSwitch;

/** styled */

const StyledSwitch = styled(props => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  "width": "64px",
  "height": "30px",
  "padding": 0,
  "borderRadius": "100px",
  "& .MuiSwitch-switchBase": {
    "margin": 1,
    "padding": 0,
    "transform": "translateX(4px)",
    "&.Mui-checked": {
      "transform": "translateX(34px)",
      "color": "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#5D6DBE",
        opacity: 1,
        border: 0,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 24,
    height: 24,
    marginTop: "1.8px",
  },
  "& .MuiSwitch-track": {
    "width": 64,
    "height": 30,
    "borderRadius": 20 / 2,
    "backgroundColor": "#C4C5CC",
    "opacity": 1,
    "position": "relative",
    "transition": theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    "&:before": {
      content: '"OFF"',
      position: "absolute",
      right: "8px", // OFF 텍스트를 왼쪽에 배치
      top: "50%",
      transform: "translateY(-50%)",
      color: "#fff",
      fontSize: "13px",
      fontWeight: "500",
      lineHeight: "20px",
      opacity: 1,
    },
    "&:after": {
      content: '"ON"',
      position: "absolute",
      left: "10px", // ON 텍스트를 오른쪽에 배치
      top: "50%",
      transform: "translateY(-50%)",
      color: "#fff",
      fontSize: "13px",
      fontWeight: "500",
      lineHeight: "20px",
      opacity: 0,
    },
  },
  "& .Mui-checked + .MuiSwitch-track": {
    "&:before": {
      opacity: 0, // OFF 숨김
    },
    "&:after": {
      opacity: 1, // ON 표시
    },
  },
}));
//예시
