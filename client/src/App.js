import React from "react";
import "./App.css";
import DashBoard from "./components/DashBoard";
import { AppProvider } from "./context/Context";
function App() {
  return (
    <AppProvider>
      <DashBoard />
    </AppProvider>
  );
}

export default App;
