import { Avatar } from "../components";
import { IMatch } from "../interfaces/match.interface";
import { ITableHeader } from "../interfaces/table.interface";

export const TableHeaderMatch: ITableHeader[] = [
  {
    label: "Date/Time",
    field: (value: IMatch) => value.date,
    style: { width: "50%" },
  },
  {
    label: "Home Team",
    field: (value: IMatch) => Avatar(value.homeTeam.name, value.homeTeam.code),
    style: { width: "100px" },
  },
  {
    label: "",
    field: (value: IMatch) =>
      `${value.homeTeam.goals} - ${value.awayTeam.goals}`,
    style: { textAlign: "center" },
  },
  {
    label: "Away Team",
    field: (value: IMatch) => Avatar(value.awayTeam.name, value.awayTeam.code),
    style: { width: "100px" },
  },
];
