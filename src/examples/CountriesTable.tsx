import { GeneralTable } from "../components";
import { TableHeader } from "../composables";

type Props = {};
const countries: ICountry[] = [
  {
    id: "1",
    name: "Estados Unidos",
    mp: "12",
    gf: "100",
    ga: "200",
    points: "300",
    code: "US",
  },
  {
    id: "2",
    name: "Peru",
    mp: "12",
    gf: "100",
    ga: "200",
    points: "300",
    code: "PE",
  },
];

export default function CountriesTable({}: Props) {
  return <GeneralTable rows={countries} cols={TableHeader} />;
}
