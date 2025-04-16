import "./App.css";
import { Table, TableBody, TableCell, TableRow } from "flowbite-react";
import { Data } from "./Data/birthData.ts";

function App() {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableBodyWithDefinition />
      </Table>
    </div>
  );
}

function TableBodyWithDefinition() {
  return (
    <TableBody className="divide-y">
      <TableHeaderWithDefinition />
      <TableRowDefinition />
    </TableBody>
  );
}

export default App;

function TableHeaderWithDefinition() {
  const COLUMNS = ["Name", "Surname", "Birth Day"];

  return (
    <TableRow>
      {COLUMNS.map((item, index) => {
        return (
          <TableCell
            key={index}
            className="bg-gray-100 text-xs font-bold uppercase text-gray-700 dark:bg-gray-700
                            dark:text-white border"
          >
            {item}
          </TableCell>
        );
      })}
    </TableRow>
  );
}

function TableRowDefinition() {
  return Data.map((item, index) => (
    <TableRow key={index}>
      <TableCellWithDefinition label={item.name} />
      <TableCellWithDefinition label={item.surname} />
      <TableCellWithDefinition label={item.date} />
    </TableRow>
  ));
}

function TableCellWithDefinition(data: { label: string }) {
  return <TableCell className="border">{data.label}</TableCell>;
}
