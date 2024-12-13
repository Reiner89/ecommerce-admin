import { useState } from "react";
import * as Icon from "../../../../../../Components/Icons/Iconos";
import { Pack } from "../../../../../../../Interfaces/Pack/Pack";
import { useProdServices } from "../../../../ProductosServicios/Hooks/useProdServices";

export const Opciones = ({ showModal, onClose, item }: Props) => {
  const { editFormPack } = useProdServices();

  // Estado del producto activo
  const [productoActivo, setProductoActivo] = useState(false);

  // Funcion para activar desactivar el producto
  const toggleStateProduct = () => {
    setProductoActivo(!productoActivo);
  };

  return (
    <div
      className={`container-modal-opciones w-28 absolute top-0 left-0 right-0 flex-col bg-white shadow-md text-[13px] pt-3 px-4 transition-all duration-300 z-10 ${
        showModal ? "flex" : "hidden"
      }`}
    >
      <button
        className="flex items-center pb-3"
        onClick={() => editFormPack(item)}
      >
        <Icon.Edit className="mr-2" />
        <span className="">Editar</span>
      </button>
      <button onClick={onClose} className="flex items-center pb-3">
        <Icon.Destacar className="mr-2" />
        <span className="">Destacar</span>
      </button>
      <button onClick={toggleStateProduct} className="flex items-center pb-3">
        {productoActivo ? (
          <>
            <Icon.Activar className="mr-2" />
            <span className="">Activar</span>
          </>
        ) : (
          <>
            <Icon.Desactivar className="mr-2" />
            <span className="">Desactivar</span>
          </>
        )}
      </button>
      {productoActivo && (
        <button onClick={onClose} className="flex items-center pb-3">
          <Icon.Delete className="mr-2" />
          <span className="">Eliminar</span>
        </button>
      )}
    </div>
  );
};

interface Props {
  item: Pack;
  showModal: boolean;
  onClose: () => void;
}
