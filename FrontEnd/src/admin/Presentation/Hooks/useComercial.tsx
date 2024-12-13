import { useContext } from "react";
import { ComercialContext, PropsComercialCtx} from "../Context/Comercial/ComercialContext";

export const useComercial = (): PropsComercialCtx => {
  // Uso mi contexto
  const context = useContext(ComercialContext);

  // Si no hay contexto, generamos un error
  if (!context) {
    throw new Error("useComercial debe ser usado dentro de un ComercialProvider");
  }

  // Si no lo devolvemos
  return context;
};