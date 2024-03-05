import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#000000',
    },
  },
  typography: {
    fontFamily: "Helvetica Neue",
    //"Segeo UI"
  }
});

theme = responsiveFontSizes(theme);


export default theme;