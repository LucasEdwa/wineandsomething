// Theme interfaces
export interface ITheme {
  background: string;
  text: string;
  subText: string;
  button: {
    primary: string;
    secondary: string;
  };
}

export interface IThemes {
  primary: ITheme;
  secondary: ITheme;
}
