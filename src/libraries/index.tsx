import { PropsWithChildren } from "react";
import MuiSetting from "@libraries/mui/MuiSetting";
import ReactQuerySetting from "@libraries/reactQuery/ReactQuerySetting";
import ToastSetting from "@libraries/toast/ToastSetting";

export default function AppRegister({ children }: PropsWithChildren) {
  return (
    <MuiSetting>
      <ReactQuerySetting>
        {children}
        <ToastSetting />
      </ReactQuerySetting>
    </MuiSetting>
  );
}
