import { DocumentoRef } from "../DocRef/DocumentoRef";
import * as TForm from "./Components";

export const Form = ({ tipoFactura }: Props) => {
  return (
    <div className="relative flex flex-col">
      <div className="grid grid-cols-3 gap-x-10">
        {tipoFactura === "nacional" ? (
          <TForm.Nacional />
        ) : (
          <TForm.Internacional />
        )}
        <DocumentoRef />
      </div>
    </div>
  );
};

interface Props {
  tipoFactura: string;
}
