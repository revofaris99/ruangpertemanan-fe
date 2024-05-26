import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routers";
import { Provider } from "react-redux";
import store from "./storages/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
