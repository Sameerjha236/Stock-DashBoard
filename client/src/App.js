import React from "react";
import "./App.css";
import DashBoard from "./components/DashBoard";
import { ThemeProvider } from "./context/ThemeContext";
function App() {
  return (
    <ThemeProvider>
      <DashBoard />
    </ThemeProvider>
  );
}

export default App;
