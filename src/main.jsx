import React from "react";
import ReactDOM from "react-dom/client";
import { FirstApp } from "./FirstApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirstApp title={"Counter App"} subTitle={123} />
  </React.StrictMode>
);
