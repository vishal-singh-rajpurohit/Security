import React from "react";
import "./globals.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { AppProvider } from "./context/AppContext";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./App/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProvider>
        <Router>
          <App />
        </Router>
      </AppProvider>
    </Provider>
  </React.StrictMode>
);
