import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'src/store';
import axios from 'axios';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from "moment";
import "moment/locale/es";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import App from 'src/app';

axios.defaults.baseURL = process.env.API_ROOT;
moment.locale("es");

const mainColor = '#40C3FD';
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#9ADFFD',
      main: mainColor,
      dark: '#05ABF3',
      contrastText: '#fff',
    },
    secondary: {
      light: '#D2F8E6',
      main: '#30D887',
      dark: '#00A958',
      contrastText: '#fff',
    },
    error: {
      main: '#ff5a5f',
    },
    custom: {
      black: '#000',
      lightGrey: '#f4f4f4',
      mediumGrey: '#777',
      darkGrey: '#111',
      white: '#fff',
      background: '#40C3FD',
      red: '#ff5a5f',
      darkBlue: '#27648C',
      lightBlue: '#F0F8FE',
      text: 'rgba(0, 0, 0, 0.87)',
    },
    background: {
      default: '#F4F4F4'
    }
  },
  typography: {
    fontSize: 12,
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: `1px solid #999`,
        },
        '&:after': {
          borderBottom: `2px solid ${mainColor}`,
        }
      }
    },
    MuiFormLabel: {
      root: {
        color: '#999',
        '&$focused': {
          color: mainColor,
          '&$error': {
            color: '#ff5a5f',
          },
        },
        '&$error': {
          color: '#999',
        },
      },
    },
    MuiFormControl: {
      root: {
        width: '100%',
      },
      marginNormal: {
        marginTop: 12,
        marginBottom: 4,
      },
      marginDense: {
        marginTop: 2,
        marginBottom: 2,
      }
    },
    MuiFormHelperText: {
      root: {
        marginTop: 4,
        lineHeight: 1.2,
        letterSpacing: 0.01,
        '&$error': {
          marginTop: 4,
          lineHeight: 1.2,
          letterSpacing: 0.01
        }
      },
    }
  },
  props: {
    MuiButton: {
      disableElevation: true,
    }
  }
});

ReactDOM.render(
  <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} locale={'es'}>
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </MuiThemeProvider>
  </MuiPickersUtilsProvider>, 
  document.querySelector('#root'));

