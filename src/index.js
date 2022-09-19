import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header.js";
import "./styles/styles.css";
import JSON from "./db.json";
import NewsList from "./components/news_list";
class App extends Component {
  state = {
    news: JSON,
  };
  render() {
    return (
      <div className="hey">
        <Header />
        <NewsList news={this.state.news} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
