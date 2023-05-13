import { GeneralTable } from "../components";
import { TableHeaderMatch } from "../composables/TableHeaderMatch";
import { IMatch } from "../interfaces/match.interface";
import "./table.css";
type Props = {};
const matchs: IMatch[] = [
  {
    id: "1",
    date: "5.5.2022",
    homeTeam: {
      name: "Estados Unidos",
      code: "US",
      goals: 1,
    },
    awayTeam: {
      name: "Peru",
      code: "PE",
      goals: 2,
    },
  },
  {
    id: "2",
    date: "5.5.2022",
    homeTeam: {
      name: "Peru",
      code: "PE",
      goals: 2,
    },
    awayTeam: {
      name: "Estados Unidos",
      code: "US",
      goals: 1,
    },
  },
];

export default function MatchTable({}: Props) {
  return (
    <GeneralTable className="table" rows={matchs} cols={TableHeaderMatch} />
  );
}
