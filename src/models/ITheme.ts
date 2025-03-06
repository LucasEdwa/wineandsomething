// Theme interfaces
export interface ITheme {
  background: string;
  text: string;
  subText: string;
  button: {
    primary: string;
    secondary: string;
  };
  footer: {
    primary: string;
    background: string;
    text: string;
    links: string;
    link: string;
    container: string;
  };
  nav: {
    container: string;
    links: string;
    link: {
      primary: string;
      secondary: string;
    };
    dropdown: string;
    button: string;
    mobileLinks: string;
  };
}

export interface IThemes {
  primary: ITheme;
  secondary: ITheme;
}
