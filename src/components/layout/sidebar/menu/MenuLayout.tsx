import { FunctionComponent } from "react";

import { Link, Stack, styled, SvgIcon, SxProps, Theme, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

type PageButtonProps = {
  routePath: string;
  pageName: string;
  icon: FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

export default function MenuLayout({ pageName, routePath, icon }: PageButtonProps) {
  const { pathname } = useLocation();
  const isActive = pathname === routePath;

  return (
    <Container>
      <Link href={routePath} sx={useMenuButtonStyles(isActive)}>
        <SvgIcon component={icon} inheritViewBox />
      </Link>
      <Typography variant="h5" sx={getTypographyStyles(isActive)}>
        {pageName}
      </Typography>
    </Container>
  );
}

/** utils */

const getTypographyStyles = (isActive: boolean): SxProps<Theme> => ({
  whiteSpace: "pre",
  textAlign: "center",
  color: theme => theme.palette.primary[isActive ? "contrastText" : "light"],
});

const useMenuButtonStyles = (isActive: boolean): SxProps<Theme> => ({
  borderRadius: "12px",
  width: "36px",
  height: "36px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: theme => theme.palette.primary[isActive ? "light" : "main"],
  color: theme => theme.palette.primary[isActive ? "contrastText" : "light"],
});

/** styles */
const Container = styled(Stack)({
  alignItems: "center",
  gap: "6px",
});
