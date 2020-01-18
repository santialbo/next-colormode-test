import {
  ColorModeProvider,
  theme,
  ThemeProvider,
  CSSReset
} from "@chakra-ui/core";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset></CSSReset>
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}
