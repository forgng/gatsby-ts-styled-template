// import original module declarations
import "styled-components"

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    boxShadow: string
    breakpoints: {}
    colors: {
      main: string
      sky: string
    }
    dimensions: {
      navBarHeight: string
    }
  }
}
