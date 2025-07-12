import { useState } from "react";
import CustomTooltip from "./CustomTooltip";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import goalsData from "../data/goals_per_year.json";

export default function GoalsLineChart({ language }) {
  const [filter, setFilter] = useState("all");

  const filterByDecade = (data, filter) => {
    if (filter === "all") return data;
    const decade = parseInt(filter);
    return data.filter((d) => d.year >= decade && d.year < decade + 10);
  };

  const filteredData = filterByDecade(goalsData, filter);

  return (
    <div className="dashboard-card">
      <div className="chart-header">
        <h3>
          {language === "en"
            ? "Total Goals per World Cup"
            : "Nombre total de buts par Coupe du Monde"}
        </h3>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="chart-filter"
        >
          <option value="all">{language === "en" ? "All Years" : "Toutes les années"}</option>
          <option value="1930">1930s</option>
          <option value="1940">1940s</option>
          <option value="1950">1950s</option>
          <option value="1960">1960s</option>
          <option value="1970">1970s</option>
          <option value="1980">1980s</option>
          <option value="1990">1990s</option>
          <option value="2000">2000s</option>
          <option value="2010">2010s</option>
          <option value="2020">2020s</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          data={filteredData}
          margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="year"
            angle={-30}
            textAnchor="end"
            interval={0}
          />
          <YAxis />

          <Tooltip
            content={
              <CustomTooltip
              language={language}
              labelKey="Year"
              unit="goals"
              unitFr="buts"
              />
            }
            cursor={{ fill: "transparent" }}
            isAnimationActive={false}
          />

          <Line
            type="monotone"
            dataKey="totalGoals"
            stroke="#ff7f50"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
