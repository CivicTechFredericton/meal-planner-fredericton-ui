import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Router } from 'react-router-dom';
import history from './history';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#63ccff',
            main: '#039be5',
            dark: '#006db3',
            contrastText: '#ffffff',
        },
        secondary: {
            light: '#ffb04c',
            main: '#f57f17',
            dark: '#bc5100',
            contrastText: '#000000',
        },
        typography: {
            useNextVariants: true,
        },
        text: {
            primary: '#0175ad',
            secondary: '#039be5',
            disabled: '#000000',
            hint: '#000000',
        },
    },
});

ReactDOM.render(
    <Router history={history}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
