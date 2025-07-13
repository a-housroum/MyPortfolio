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
import medalsData from "../data/medals_by_year_by_country.json";
import countryNames from "../data/countryNames";

export default function MedalsLineChart({ language }) {
  const [selectedCountry, setSelectedCountry] = useState("CAN");
  const [range, setRange] = useState("20");

  const currentYear = Math.max(...medalsData.map((d) => d.Year));
  const startYear = currentYear - parseInt(range, 10);

  const filteredData = medalsData
    .filter((d) => d.Year >= startYear)
    .map((d) => ({
      year: d.Year,
      medals: d[selectedCountry] || 0,
    }));

  const allCountries = Object.keys(medalsData[0]).filter((key) => key !== "Year");

  return (
    <div className="dashboard-card">

      <div className="chart-header">

        <h3>
          {language === "en"
            ? "Total Medals Over Time"
            : "Total des médailles au fil du temps"}
        </h3>

        <div className="filter-row">

          <div>
            <label htmlFor="country-select">
               {language === "en" ? "Country:     " : "Pays:     "}
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="chart-filter"
            >
                {allCountries.map((country) => (
                <option key={country} value={country}>
                {countryNames[country] || country}
                </option>
                ))}
            </select>
          </div>

          <div>
             <label htmlFor="range-select">
               {language === "en" ? "Year Range:     " : "Plage d'années:     "}
             </label>
             <select
               id="range-select"
               value={range}
               onChange={(e) => setRange(e.target.value)}
               className="chart-filter"
             >
               <option value="20">
               {language === "en" ? "Past 20 Years" : "Les 20 dernières années"}
               </option>
               <option value="40">
               {language === "en" ? "Past 40 Years" : "Les 40 dernières années"}
               </option>
               <option value="60">
               {language === "en" ? "Past 60 Years" : "Les 60 dernières années"}
               </option>
             </select>
          </div>

        </div>

      </div>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          data={filteredData}
          margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" angle={-30} textAnchor="end" interval={0} />
          <YAxis />
          <Tooltip
            content={
              <CustomTooltip
                language={language}
                labelKey="Year"
                unit="Medals"
                unitFr="Médailles"
              />
            }
            cursor={{ fill: "transparent" }}
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            dataKey="medals"
            stroke="#ff7f50"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>

      <p className="chart-description">
        {language === "en"
          ? "View how a selected country’s medal count has changed over time. Filter by year range to explore recent or long-term trends."
          : "Visualisez l'évolution du nombre de médailles d'un pays sélectionné au fil du temps. Filtrez par période pour explorer les tendances récentes ou à long terme."}
      </p>

    </div>
  );
}
