import React from "./lib/react.js";
import ReactDOM from "./lib/react-dom/client.js";
import App from "./src/App.ts";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(React.createElement(App));
