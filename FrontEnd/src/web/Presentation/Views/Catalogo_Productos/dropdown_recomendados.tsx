import { Select, SelectItem } from "@nextui-org/react";
import { OpcionesProductos } from "./Productos/OpcionesProductos";

function Dropdown_recomendados() {
  return (
    <Select
                    label="Ordenar Por"
                    className="max-w-xs"
                >
                    {OpcionesProductos.map((Opciones) => (
                        <SelectItem key={Opciones.key}>
                            {Opciones.label}
                        </SelectItem>
                    ))}
                </Select>
  )
}

export default Dropdown_recomendados