import React from 'react';
import {Provider} from "react-redux";
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import App from './app/App';
import {store} from "./state/store/store";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
