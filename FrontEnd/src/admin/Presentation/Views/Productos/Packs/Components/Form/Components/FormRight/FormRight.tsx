import { RightEditar } from "./Editar/RightEditar";
import { RightNuevo } from "./Nuevo/RightNuevo";

export const FormRight = ({ id }: Props) => {
  return (
    <div className="w-full">
      {id === "edit" ? <RightEditar /> : <RightNuevo />}
    </div>
  );
};

interface Props {
  id: "new" | "edit";
}
