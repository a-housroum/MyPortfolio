export default function Navbar({ toggleLanguage, language }) {
  return (
    <nav className="dashboard-navbar">
      <div className="navbar-title">
        {language === "en" ? "Olympics Dashboard" : "Tableau de bord des Jeux olympiques"}
      </div>
      <button
        className="lang-toggle"
        onClick={toggleLanguage}
        aria-label={language === "en" ? "Switch to French" : "Passer en anglais"}
      >
        {language === "en" ? "FR" : "EN"}
      </button>
    </nav>
  );
}