import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Router } from 'react-router-dom';
import history from './history';
import i18n from './utils/i18n';
import { I18nextProvider } from 'react-i18next';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#4a4c54',
            main: '#22242b',
            dark: '#000000',
            contrastText: '#ffffff',
        },
        secondary: {
            light: '#abf3a2',
            main: '#7ac073',
            dark: '#4a8f46',
            contrastText: '#ffffff',
        },
        typography: {
            useNextVariants: true,
        },
        text: {
            primary: '#ffffff',
            secondary: '#000000',
            disabled: '#000000',
            hint: '#000000',
        },
    },
});

ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <Router history={history}>
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
        </Router>
    </I18nextProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
