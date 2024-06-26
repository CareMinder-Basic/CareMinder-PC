import { Grid } from "@mui/material";

import AdminImage from "@assets/login-admin.png";
import WardImage from "@assets/login-ward.png";

type ThumbnailProps = { isAdmin?: boolean };

export default function Thumbnail({ isAdmin = false }: ThumbnailProps) {
  return (
    <Grid
      item
      xs
      component="img"
      src={isAdmin ? AdminImage : WardImage}
      alt="CareMinder Thumbnail"
      sx={{ width: "1180px", maxHeight: "100vh", objectFit: "cover" }}
    />
  );
}
