import { FC, ReactNode } from "react";
import Sidebar from "./sidebar";
import { Grid } from "@mui/material";

interface BaseLayoutProps {
  children?: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <Grid container>
        <Grid xs={1} borderRight={1} minHeight="100vh">
          <Sidebar />
        </Grid>
        <Grid xs={11} p={2}>
          <main>{children}</main>
        </Grid>
      </Grid>
    </>
  );
};

export default BaseLayout;
