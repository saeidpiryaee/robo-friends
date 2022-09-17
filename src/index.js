import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header.js";
import "./styles/styles.css";
const App = () => {
  return (
    <div className="hey">
      <h1>Hello</h1>
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
