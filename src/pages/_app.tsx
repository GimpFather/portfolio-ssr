import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { theme } from "@/styles/defaultTheme";
import HeaderBlock from "@/components/organisms/HeaderBlock";
import NavbarBlock from "@/components/organisms/NavbarBlock";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <HeaderBlock />
        <NavbarBlock />
        <Component {...pageProps} />
      </ThemeProvider>
    </CssBaseline>
  );
}
