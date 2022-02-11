import React from "react";
import Header from "./components/Header/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Info from "./components/Info/Info";
import Ads from "./components/Ads/Ads";

import "./App.css";

export default function App() {
  return (
    <div>
      <Header />
      <Jumbotron />
      <Info className="Info" />
      <Ads />
    </div>
  );
}