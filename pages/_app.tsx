import "../styles/globals.css";
import "../public/css/fonts.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../assets/themes";
import CssBaseline from "@mui/material/CssBaseline";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
