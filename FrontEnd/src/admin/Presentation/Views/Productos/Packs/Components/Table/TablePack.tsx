import { useState } from "react";
import * as Icon from "../../../../../Components/Icons/Iconos";
import { Opciones } from "./Components/Opciones";
import { Pack } from "../../../../../../Interfaces/Pack/Pack";
import { useProdServices } from "../../../ProductosServicios/Hooks/useProdServices";
import { LoaderTables } from "../../../../../Components";

export const Table = ({ data }: Props) => {
  const { openModalVerPack, loading, openProductsAsoc } = useProdServices();

  // Estado para manejar qué modal está abierto
  const [openModal, setOpenModal] = useState<string | null>(null);

  // Modal Opciones por id
  const toggleModal = (id: string | null) => {
    setOpenModal((prev) => (prev === id ? null : id));
  };

  return (
    <div className="scroll cont-tabla relative w-full h-[79%] overflow-x-auto overflow-y-auto">
      {loading ? (
        <LoaderTables />
      ) : (
        <table className="relative w-full text-[#67748e] mb-5 xl:mb-0">
          <thead>
            <tr className="text-[.65rem] text-[#8392ab] text-left uppercase opacity-70 border-b border-solid border-[#e9ecef]">
              <th className="py-3 px-6">Imagen</th>
              <th className="py-3 px-6">SKU</th>
              <th className="py-3 px-6">Nombre de Pack</th>
              <th className="py-3 px-6">Tipo de Pack</th>
              <th className="py-3 px-6">Productos</th>
              <th className="py-3 px-6">Estado</th>
              <th className="py-3 px-6">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.packSku}
                className="text-[.875rem] text-left leading-[1.5] font-normal border-b cursor-pointer hover:bg-gray-100"
              >
                <th
                  onClick={() => openModalVerPack(item)}
                  className="py-3 px-6"
                >
                  <div className="cont-row flex items-center">
                    <img
                      src={item.packImages[0]}
                      alt={item.packImages[0]}
                      className="relative w-[30px] h-[30px] ml-4 rounded-md"
                    />
                  </div>
                </th>
                <td className="py-3 px-6">{item.packSku}</td>
                <td className="py-3 px-6 text-base text-[#344767] font-bold">
                  {item.packNombre}
                </td>
                <td className="py-3 px-6">{item.packTipo}</td>
                <td className="py-3 px-6">
                  <button
                    type="button"
                    onClick={() => openProductsAsoc(item.productosPacks)}
                    className="bg-[#09c] rounded-full text-lg text-white p-1.5"
                  >
                    <Icon.ListaProductos />
                  </button>
                </td>
                <td className="py-3 px-6">
                  <div
                    className={`w-full h-[20px] flex justify-center items-center gap-x-2 px-3 rounded-lg ${
                      item.packEstado ? "bg-[#ddf8e0]" : "bg-[#ebeced]"
                    }`}
                  >
                    <span
                      className={`w-[13px] h-[13px] rounded-full ${
                        item.packEstado
                          ? "bg-[#43a047] border border-solid border-[#43a047]"
                          : "bg-transparent border border-solid border-[#61666E]"
                      }`}
                    />
                    <p
                      className={`relative text-xs ${
                        item.packEstado
                          ? "text-[#43a047]"
                          : "text-[rgb(164,167,172)]"
                      } font-bold`}
                    >
                      {item.packEstado ? "Activo" : "Inactivo"}
                    </p>
                  </div>
                </td>
                <td
                  className="relative flex justify-center items-center py-3 px-6"
                  onMouseEnter={() => toggleModal(item.packSku)}
                  onMouseLeave={() => toggleModal(null)}
                >
                  <button className="relative text-base text-[#8392ab] transition-all duration-300">
                    <Icon.Opciones />
                  </button>
                  {openModal === item.packSku && (
                    <Opciones
                      showModal={true}
                      onClose={() => setOpenModal(null)}
                      item={item}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

interface Props {
  data: Pack[];
}
