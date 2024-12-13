import { useRemisionGuias } from "../../../../../../../../Hooks/useRemisionGuias";
import { Editando } from "./Components/Editando";
import { NotEdit } from "./Components/NotEdit";

interface Props {
  tipoDoc: string;
}

export const Values = ({ tipoDoc }: Props) => {
  const {
    correlativaGR,
    serieGR,
    editandoGR,
    cambiarSerieGR,
    cambiarCorrelativaGR,
    editarValuesGR,
  } = useRemisionGuias();

  return (
    <div className="relative italic">
      {editandoGR ? (
        <Editando
          correlativo={correlativaGR}
          serie={serieGR}
          handleSeriesChange={cambiarSerieGR}
          handleCorrelativosChange={cambiarCorrelativaGR}
          saveChanges={editarValuesGR}
        />
      ) : (
        <NotEdit
          editValues={editarValuesGR}
          tipoDoc={tipoDoc}
          correlativo={correlativaGR}
          serie={serieGR}
        />
      )}
    </div>
  );
};
