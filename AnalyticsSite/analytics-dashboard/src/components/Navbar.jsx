export default function Navbar({ toggleLanguage, language }) {
    return (
      <nav className="dashboard-navbar">
        <div className="navbar-title">
          {language === "en" ? "FIFA Dashboard" : "Tableau FIFA"}
        </div>
        <button className="lang-toggle" onClick={toggleLanguage}>
          {language === "en" ? "FR" : "EN"}
        </button>
      </nav>
    );
  }