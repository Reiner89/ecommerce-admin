import { useRemisionGuias } from "../../../../../../../../../../Hooks/useRemisionGuias";
import { Editando } from "./Components/Editando";
import { NotEdit } from "./Components/NotEdit";

interface Props {
  tipoDoc: string;
}

export const Values = ({ tipoDoc }: Props) => {
  const {
    correlativo,
    serie,
    editando,
    handleSeriesChange,
    handleCorrelativosChange,
    editValues,
    saveChanges,
  } = useRemisionGuias();

  return (
    <div className="relative italic">
      {editando ? (
        <Editando
          correlativo={correlativo}
          serie={serie}
          handleSeriesChange={handleSeriesChange}
          handleCorrelativosChange={handleCorrelativosChange}
          saveChanges={saveChanges}
        />
      ) : (
        <NotEdit
          editValues={editValues}
          tipoDoc={tipoDoc}
          correlativo={correlativo}
          serie={serie}
        />
      )}
    </div>
  );
};
