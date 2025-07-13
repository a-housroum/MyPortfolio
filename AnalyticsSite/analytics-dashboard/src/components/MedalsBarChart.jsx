import { useState } from "react";
import CustomTooltip from "./CustomTooltip";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import medalsData from "../data/medals_by_type.json";
import countryNames from "../data/countryNames";

export default function MedalsBarChart({ language }) {
  const [filter, setFilter] = useState("top5");
  const [medalType, setMedalType] = useState("Total");

  const getFilteredData = () => {
    const sorted = [...medalsData].sort((a, b) => b[medalType] - a[medalType]);
    if (filter === "top5") return sorted.slice(0, 5);
    if (filter === "top10") return sorted.slice(0, 10);
    if (filter === "top15") return sorted.slice(0, 15);
    return sorted;
  };

  const filteredData = getFilteredData();

  return (
    <div className="dashboard-card">

      <div className="chart-header">

        <h3>
          {language === "en"
            ? "Total Medals by Country"
            : "Total des médailles par pays"}
        </h3>
        
        <div className="filter-row">

          <div>
             <label>
              {language === "en" ? "Medal Type:     " : "Type de médaille :     "}
             </label>
             <select
               value={medalType}
               onChange={(e) => setMedalType(e.target.value)}
               className="chart-filter"
             >
                <option value="Total">{language === "en" ? "All Medals" : "Toutes les médailles"}</option>
                <option value="Gold">{language === "en" ? "Gold Medals" : "Médailles d'or"}</option>
                <option value="Silver">{language === "en" ? "Silver Medals" : "Médailles d'argent"}</option>
                <option value="Bronze">{language === "en" ? "Bronze Medals" : "Médailles de bronze"}</option>
             </select>
          </div>

          <div>
             <label>
               {language === "en" ? "Number of Countries:     " : "Nombre de pays :     "}
             </label>
             <select
               value={filter}
               onChange={(e) => setFilter(e.target.value)}
               className="chart-filter"
             >
                <option value="top5">{language === "en" ? "Top 5" : "Top 5"}</option>
                <option value="top10">{language === "en" ? "Top 10" : "Top 10"}</option>
                <option value="top15">{language === "en" ? "Top 15" : "Top 15"}</option>
             </select>
           </div>

        </div>

      </div>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={filteredData}
          margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="Country"
            tickFormatter={(abbr) => countryNames[abbr] || abbr}
            angle={-30}
            textAnchor="end"
            interval={0}
          />
          
          <YAxis />

          <Tooltip
            content={
              <CustomTooltip
                language={language}
                labelKey="Country"
                unit={medalType}
                unitFr={
                  medalType === "gold"
                    ? "or"
                    : medalType === "silver"
                    ? "argent"
                    : medalType === "bronze"
                    ? "bronze"
                    : "Médailles"
                }
              />
            }
            cursor={{ fill: "transparent" }}
            isAnimationActive={false}
          />
          <Bar dataKey={medalType} fill="#ff7f50" />
        </BarChart>
      </ResponsiveContainer>

      <p className="chart-description">
        {language === "en"
          ? "Compare the total number of medals earned by each country. Use the filters to adjust the number of countries and type of medal."
          : "Comparez le nombre total de médailles remportées par chaque pays. Utilisez les filtres pour ajuster le nombre de pays et le type de médaille."}
      </p>

    </div>
  );
}
