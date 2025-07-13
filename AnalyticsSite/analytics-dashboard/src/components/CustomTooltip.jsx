import countryNames from "../data/countryNames";

export default function CustomTooltip({
    active,
    payload,
    label,
    language,
    labelKey = "Team",
    unit = "titles",
    unitFr = "titres",
  }) {
    if (active && payload && payload.length > 0) {
      
      const labelText =
        language === "en"
        ? `${labelKey}: ${countryNames[label] || label}`
        : `${translateLabel(labelKey)} : ${countryNames[label] || label}`;

      const valueText =
        language === "en"
          ? `${payload[0].value} ${unit}`
          : `${payload[0].value} ${unitFr}`;
  
      return (
        <div
          style={{
            backgroundColor: "#222",
            border: "1px solid #444",
            borderRadius: "6px",
            padding: "0.5rem 1rem",
            color: "#ffb347",
          }}
        >
          <p style={{ margin: 0, fontWeight: "bold", color: "#fff" }}>{labelText}</p>
          <p style={{ margin: 0 }}>{valueText}</p>
        </div>
      );
    }
  
    return null;
  }
  
  function translateLabel(labelKey) {
  switch (labelKey) {
    case "Team":
      return "Équipe";
    case "Country":
      return "Pays";
    case "Year":
      return "Année";
    default:
      return labelKey;
  }
}