import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

export default function CustomResponsiveTable() {
  return (
    <Table className='mb-12'>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="">Batsman</TableHead>
          <TableHead>R</TableHead>
          <TableHead>B</TableHead>
          <TableHead>4s</TableHead>
          <TableHead>6s</TableHead>
          <TableHead className="text-right">S/R</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 4 }).map((_: any, idx: number) => {
          return (
            <TableRow key={idx}>
              <TableCell className="font-medium">KL Rahul</TableCell>
              <TableCell>67</TableCell>
              <TableCell>40</TableCell>
              <TableCell className="">7</TableCell>
              <TableCell className="">2</TableCell>
              <TableCell className="text-right">167.50</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}