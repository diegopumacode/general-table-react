export interface ITableHeader {
  label: string;
  field: string | ((value: any) => JSX.Element | string);
  style?: { width?: string; textAlign?: string };
}
