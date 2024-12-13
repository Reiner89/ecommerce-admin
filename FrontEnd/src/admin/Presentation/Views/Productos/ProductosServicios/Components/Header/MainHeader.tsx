import { FAB } from "../../../../../Components";
import * as Icon from "../../../../../Components/Icons/Iconos";
import * as Modal from "../Modals";
import { useProdServices } from "../../Hooks/useProdServices";
import * as Importar from "../Modals/Importar/Components";

export const MainHeader = () => {
  // Hook personalizado
  const { importRef, openImportProducts, modalOpciones, handleModalOpciones } =
    useProdServices();

  return (
    <div className="relative flex justify-between items-center h-11 px-4 py-0">
      <div />
      <div ref={importRef} className="relative flex">
        <FAB
          icono={<Icon.Importar />}
          texto="Importar"
          showModal={openImportProducts}
        />
        <FAB
          icono={<Icon.Opciones />}
          showDiv={false}
          showModal={handleModalOpciones}
        />
        <Modal.Opciones modalOpciones={modalOpciones} />
      </div>
      <Importar.ImpProds />
      <Importar.ImpPacks />
      <Importar.ImpDesc />
      <Importar.ImpImg />
    </div>
  );
};
