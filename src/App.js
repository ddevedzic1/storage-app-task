import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="app">
      <Navbar />
      <ErrorPage />
    </div>
  );
}

export default App;
