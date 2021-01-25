import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

import * as serviceWorker from './service-worker';
import reportWebVitals from './report-web-vitals';
import { App } from './app/componets/App';
import store from './app/store/store';
import common_uk from './assets/locales/uk/common.json'
import common_en from './assets/locales/en/common.json'

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'uk',
    resources: {
        uk: {
            common: common_uk
        },
        en: {
            common: common_en
        },
    },
});

render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <I18nextProvider i18n={i18next}>
                    <App/>
                </I18nextProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
