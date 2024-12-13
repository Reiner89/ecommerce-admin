import { DAdicionales } from "./DAdicionales/DAdicionales";
import { DConductor } from "./DConductor/DConductor";
import { DVehiculo } from "./DVehiculo/DVehiculo";

export const Privado = () => {
  return (
    <div className="relative flex flex-col gap-5">
      <DVehiculo />
      <DConductor />
      <DAdicionales />
    </div>
  );
};
