// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    boxShadow: string;
    breakpoints: {
      mobile: string;
    };
    colors: {
      main: string;
      background: string;
      backgroundInverted: string;
      text: string;
      textInverse: string;
      border: string;
    };
    dimensions: {
      navBarHeight: string;
      footerHeigth: string;
    };
  }
}
