import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import './index.css'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// font awesome
import 'font-awesome/css/font-awesome.min.css'
// redux
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import root_reducer from "./store/root_reducer";
import thunk from "redux-thunk";

const store = createStore(root_reducer, applyMiddleware(thunk))

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
