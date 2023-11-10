import { useRoutes } from "react-router-dom";
import routes from "./router";
import BaseLayout from "./components/layout";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { SnackbarProvider, closeSnackbar } from "notistack";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const router = useRoutes(routes);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <SnackbarProvider
          autoHideDuration={3000}
          action={(snackKey) => (
            <IconButton onClick={() => closeSnackbar(snackKey)}>
              <CloseIcon />
            </IconButton>
          )}
        >
          <BaseLayout children={router} />
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
