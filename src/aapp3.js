import React from "react";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header"
import * as Routes from "./index"

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes/>
      </div>
    </BrowserRouter>
  );
}