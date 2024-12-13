import { useRemisionGuias } from "../../../../../../../../Hooks/useRemisionGuias";
import { Editando } from "./Components/Editando";
import { NotEdit } from "./Components/NotEdit";

interface Props {
  tipoDoc: string;
}

export const Values = ({ tipoDoc }: Props) => {
  const {
    correlativoBoleta,
    serieBoleta,
    editandoBoleta,
    SeriesChangeBoleta,
    CorrelativosChangeBoleta,
    editValuesBoleta,
    saveChangesBoleta,
  } = useRemisionGuias();

  return (
    <div className="relative italic">
      {editandoBoleta ? (
        <Editando
          correlativo={correlativoBoleta}
          serie={serieBoleta}
          handleSeriesChange={SeriesChangeBoleta}
          handleCorrelativosChange={CorrelativosChangeBoleta}
          saveChanges={saveChangesBoleta}
        />
      ) : (
        <NotEdit
          editValues={editValuesBoleta}
          tipoDoc={tipoDoc}
          correlativo={correlativoBoleta}
          serie={serieBoleta}
        />
      )}
    </div>
  );
};
