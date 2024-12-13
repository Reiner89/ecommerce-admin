import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function TablaEspecificaciones() {
  return (
    <Table
      aria-label="Tabla de Especificaciones"
      
      
      
    >
      <TableHeader>
        <TableColumn>Especificación</TableColumn>
        <TableColumn>Detalle</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Condición del producto</TableCell>
          <TableCell>Nuevo</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>País de origen</TableCell>
          <TableCell>Estados Unidos</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Características</TableCell>
          <TableCell>Natural</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>Unidad de medida</TableCell>
          <TableCell>Unidad</TableCell>
        </TableRow>
        <TableRow key="5">
          <TableCell>Forma farmacéutica</TableCell>
          <TableCell>Cápsula</TableCell>
        </TableRow>
        <TableRow key="6">
          <TableCell>Peso del producto</TableCell>
          <TableCell>0.5 kg</TableCell>
        </TableRow>
        <TableRow key="7">
          <TableCell>Cantidad contenida en el empaque</TableCell>
          <TableCell>120 cápsulas</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
