import { TConsumo } from "./TConsumo/TConsumo";

export const Top = () => {
  return (
    <div className="form-top w-full relative flex justify-between">
      <div className="form-top-left flex gap-5">
        <TConsumo />
      </div>
    </div>
  );
};
