import { FAB } from "../../../../../Components";
import * as Icon from "../../../../../Components/Icons/Iconos";
import { useProdServices } from "../../../ProductosServicios/Hooks/useProdServices";
import { Opciones } from "../Opciones/Opciones";

export const Header = () => {
  const { handleModalOpciones, openImportPacks, importRef } = useProdServices();

  return (
    <div className="flex justify-between items-center">
      <div className="relative flex gap-10"></div>
      <div ref={importRef} className="relative flex">
        <FAB
          icono={<Icon.Importar />}
          texto="Importar"
          showModal={openImportPacks}
        />
        <FAB
          icono={<Icon.Opciones />}
          showDiv={false}
          showModal={handleModalOpciones}
        />
        <Opciones />
      </div>
    </div>
  );
};
