import ReactCountryFlag from "react-country-flag";
import "./index.css";
export function Avatar(name: string, code: string) {
  return (
    <div className="avatar">
      <ReactCountryFlag countryCode={code} />
      {name}
    </div>
  );
}
