import GoalsLineChart from "../components/LineChart";
import WinsBarChart from "../components/BarChart";

export default function Dashboard({ language }) {
  return (
    <div className="dashboard-container">
      <p className="dashboard-intro">
        {language === "en"
          ? "Use the charts below to explore total goals scored in each World Cup and compare the most successful national teams in tournament history."
          : "Utilisez les graphiques ci-dessous pour explorer les buts marqués lors de chaque Coupe du Monde et comparer les équipes nationales les plus titrées de l'histoire du tournoi."}
      </p>
      <WinsBarChart language={language} />
      <GoalsLineChart language={language} />
    </div>
  );
}