import MedalsLineChart from "../components/MedalsLineChart";
import MedalsBarChart from "../components/MedalsBarChart";

export default function Dashboard({ language }) {
  return (
    <div className="dashboard-container">
      <p className="dashboard-intro">
        {language === "en"
          ? "🥇  Track medal trends across Olympic history and compare the top-performing countries based on their total medal counts."
          : "🥇  Suivez les tendances des médailles à travers l'histoire olympique et comparez les pays les plus performants en fonction de leur nombre total de médailles."
        }
      </p>
      <MedalsLineChart language={language} />
      <MedalsBarChart language={language} />
    </div>
  );
}