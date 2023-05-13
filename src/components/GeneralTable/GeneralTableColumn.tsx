import { ITableHeader } from "../../interfaces/table.interface";

type Props = {
  row: any;
  columns: ITableHeader[];
};
// TODO: CAMBIAR key por un id 🫠🫠🫠🫠
export default function GeneralTableColumn({ row, columns }: Props) {
  const getColumnValue = (col: any) => {
    if (typeof col.field === "function") {
      return col.field(row);
    }
    return <div>{row[col.field] || "-"}</div>;
  };
  return (
    <tr>
      {columns.map((col: any, index: number) => (
        <td style={col.style} key={index}>
          {getColumnValue(col)}
        </td>
      ))}
    </tr>
  );
}
