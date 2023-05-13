import { Avatar } from "../components";
import { ITableHeader } from "../interfaces/table.interface";

export const TableHeader: ITableHeader[] = [
  {
    label: "Nombre",
    field: (value: ICountry) => Avatar(value.name, value.code),
    style: { width: "70%" },
  },
  {
    label: "MP",
    field: "mp",
  },
  {
    label: "GF",
    field: "gf",
  },
  {
    label: "GA",
    field: "ga",
  },
  {
    label: "Points",
    field: "points",
    style: { textAlign: "center" },
  },
];
