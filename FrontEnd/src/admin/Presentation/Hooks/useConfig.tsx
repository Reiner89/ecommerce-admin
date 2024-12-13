import { useContext } from "react";
import { ConfigContext, PropsContext } from "../Context/Config/ConfigProvider";

export const useConfig = (): PropsContext => {
  // Uso mi contexto
  const context = useContext(ConfigContext);

  // Si no hay contexto, generamos un error
  if (!context) {
    throw new Error("useConfig debe ser usado dentro de un ConfigProvider");
  }

  // Si no lo devolvemos
  return context;
};
