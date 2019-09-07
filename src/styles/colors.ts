const baseColor = {
  red: "red",
};

const lightTheme = {
  main: "#4f64fc",
  background: "#fafafa",
  backgroundInverted: "#263238",
  text: "#37474f",
  textInverse: "#eee",
  border: "#bdbdbd",
};

const darkTheme = {
  main: "#f48fb1",
  background: "#263238",
  backgroundInverted: "#fff",
  text: "#eeeeee",
  textInverse: "#37474f",
  border: "#eeeeee",
};

const lightColors = { ...baseColor, ...lightTheme };
const darkColors = { ...baseColor, ...darkTheme };

export { lightColors, darkColors };
