import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import "./styles/dashboard.css";

function App() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));

  return (
    <div className="App">
      <Navbar toggleLanguage={toggleLanguage} language={language} />
      <Dashboard language={language} />
    </div>
  );
}

export default App;