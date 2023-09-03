import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "./style.scss";
import "aos/dist/aos.css";
import "./i18n/i18next.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/Store.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
