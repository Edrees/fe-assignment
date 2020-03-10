import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3'
    },
    secondary: {
      main: '#e91e63'
    }
  },
  overrides: {
    MuiInput: {
      underline: {
        color: '#ffffff',
        '&:hover': {
          color: '#ffffff'
        },
        '&:before': {
          borderBottom: '0'
        },
        '&:after': {
          borderBottom: '0'
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: '0'
        },
        '&$focused': {
          color: '#fbfbfb'
        }
      }
    }
  }
});

export default theme;
