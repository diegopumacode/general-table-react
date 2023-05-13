import { ITableHeader } from "../../interfaces/table.interface";
import GeneralTableColumn from "./GeneralTableColumn";

interface Props<T> {
  cols: ITableHeader[];
  rows: T[];
  className?: string;
}
// TODO: CAMBIAR key por un id 🫠🫠🫠🫠
export function GeneralTable<T>({ cols, rows, className }: Props<T>) {
  return (
    <>
      <table className={className}>
        <thead>
          <tr>
            {cols.map((col: any, index: number) => (
              <th key={index} style={col.style}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row: any, index: number) => (
            <GeneralTableColumn key={index} row={row} columns={cols} />
          ))}
        </tbody>
      </table>
    </>
  );
}
