import { LeftEdit } from "./Editar/LeftEditar";
import { LeftNuevo } from "./Nuevo/LeftNuevo";

export const FormLeft = ({ id }: Props) => {
  return (
    <div className="cont-form-izquierdo w-full">
      <div className="sombra relative flex flex-col gap-y-7 w-full bg-white p-[15px] rounded-xl">
        {id === "edit" ? <LeftEdit /> : <LeftNuevo />}
      </div>
    </div>
  );
};

interface Props {
  id: "new" | "edit";
}
