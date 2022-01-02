import { createTheme } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: "Mplus 1p",
  },
  palette: {
    primary: {
      main: "#D10024",
    },
    secondary: {
      main: "#000000",
    },
    back: {
      main: "linear-gradient(180deg, #000000 0%, #D10024 100%)",
    },
    grey: {
      50: "#978A8A",
    },
    white: {
      main: "#fff",
    },
    red: {
      main: "red",
    },
  },
});

// theme.overrides = {
//   MuiOutlinedInput: {
//     root: {
//       borderRadius: "10px",
//       // height: "55px",
//       width: "433px",
//       border: "0px",
//       // boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.25)",
//     },
//     input: {
//       fontSize: "20px",
//       color: theme.palette.grey[50],
//       fontStyle: "normal",
//       fontWeight: "normal",
//     },
//   },
// };

export default theme;
