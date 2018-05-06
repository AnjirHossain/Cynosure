import React from 'react';
import { render } from 'react-dom';
import './views/index.css';
import App from './views/App';
import { Provider } from "react-redux";
import registerServiceWorker from './registerServiceWorker';
import store from "./state/store";
import initializeStore from './state/initializeStore';


initializeStore(error => {
    if (error) {
        throw error;
    }

    render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById("root")
    );

    registerServiceWorker();
});
