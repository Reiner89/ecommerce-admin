import { RightEditar } from "./Editar/RightEditar";
import { RightNuevo } from "./Nuevo/RightNuevo";

export const FormRight = ({ id }: Props) => {
  return <>{id === "edit" ? <RightEditar /> : <RightNuevo />}</>;
};

interface Props {
  id: "new" | "edit";
}
