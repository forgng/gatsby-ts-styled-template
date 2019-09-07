import React, { PropsWithChildren } from "react";
import { GlobalStyle, lightTheme } from "styles";
import { ThemeProvider } from "styled-components";

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <main>{children}</main>
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}

export default Layout;
