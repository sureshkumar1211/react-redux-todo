//IMPORT PACKAGE MODULE 
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./state/store";

//IMPORT PROJECT MODULE
import Layout from "./components/Layout/Layout";
import "./styles/main.scss";

const App = () => (
    <Provider store={store}>
        <Layout />
    </Provider>
);

//RENDER COMPONENTS TO REAL DOM
ReactDOM.render(<App />, document.getElementById('root'));