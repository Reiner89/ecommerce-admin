export const NotEdit = ({ serie, correlativo, tipoDoc, editValues }: Props) => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <p className="">
        Nro. {tipoDoc}
        {serie} - {correlativo}
      </p>
      <div
        className="relative cursor-pointer underline text-blue-500"
        onClick={editValues}
      >
        Cambiar
      </div>
    </div>
  );
};

interface Props {
  serie: string;
  correlativo: string;
  tipoDoc: string;
  editValues: () => void;
}
