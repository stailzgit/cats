import React from "react";
import "./App.css";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app__content">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
