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
import winsData from "../data/wins_by_team.json";

export default function WinsBarChart({ language }) {
  const [filter, setFilter] = useState("all");

  const getFilteredData = () => {
    const sorted = [...winsData].sort((a, b) => b.wins - a.wins);
    return filter === "top5" ? sorted.slice(0, 5) : sorted;
  };

  const filteredData = getFilteredData();

  return (
    <div className="dashboard-card">
      <div className="chart-header">
        <h3>
          {language === "en"
            ? "Countries by World Cup Titles"
            : "Pays selon les titres en Coupe du Monde"}
        </h3>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="chart-filter"
        >
          <option value="all">
            {language === "en" ? "All Countries" : "Tous les pays"}
          </option>
          <option value="top5">
            {language === "en" ? "Top 5" : "Les 5 premiers"}
          </option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={filteredData}
          margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="team"
            angle={-30}
            textAnchor="end"
            interval={0}
          />
          <YAxis />

          <Tooltip
            content={
              <CustomTooltip
              language={language}
              labelKey="Team"
              unit="titles"
              unitFr="titres"
              />
            }
            cursor={{ fill: "transparent" }}
            isAnimationActive={false}
          />
          
          <Bar dataKey="wins" fill="#ff7f50" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
