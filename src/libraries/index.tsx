import { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";
import MuiSetting from "@libraries/mui/MuiSetting";
import ReactQuerySetting from "@libraries/reactQuery/ReactQuerySetting";
import ToastSetting from "@libraries/toast/ToastSetting";

export default function AppRegister({ children }: PropsWithChildren) {
  return (
    <MuiSetting>
      <ReactQuerySetting>
        <RecoilRoot>
          {children}
          <ToastSetting />
        </RecoilRoot>
      </ReactQuerySetting>
    </MuiSetting>
  );
}
