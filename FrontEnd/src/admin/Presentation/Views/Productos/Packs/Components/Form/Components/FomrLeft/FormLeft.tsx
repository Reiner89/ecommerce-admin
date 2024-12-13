import { useProdServices } from "../../../../../ProductosServicios/Hooks/useProdServices";
import { LeftEditar } from "./Editar/LeftEditar";
import { LeftNuevo } from "./Nuevo/LeftNuevo";

export const FormLeft = ({ id }: Props) => {
  const { formPack, handleChangePack, imagesPack } = useProdServices();

  return (
    <div className="cont-form-izquierdo w-full">
      <div className="sombra w-full relative flex flex-col gap-y-7 bg-white p-[15px] rounded-xl">
        {id === "edit" ? (
          <LeftEditar
            formPack={formPack}
            handleChangePack={handleChangePack}
            imagesPack={imagesPack}
          />
        ) : (
          <LeftNuevo formPack={formPack} imagesPack={imagesPack} />
        )}
      </div>
    </div>
  );
};

interface Props {
  id: "new" | "edit";
}
