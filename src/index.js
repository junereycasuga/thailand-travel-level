import React from "react";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga4";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
ReactGA.initialize("G-1NC87LW36H");
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const sendAnalytics = () => {
  ReactGA.send({
    hitType: "pageView",
    page: window.location.pathname
  });
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(sendAnalytics);
