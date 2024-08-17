import React from "react";
import ReactDOM from "react-dom/client";

const parent = (
  <div>
    <h1>Hello React</h1>
    <h1>Hello React</h1>
    <h1>Hello React</h1> <h1>Hello React</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
