import { useContext } from "react";
import { AdminContext, AdminProps } from "../Context/AdminContext/AdminContext";

export const useAdministracion = (): AdminProps => {
  const context = useContext(AdminContext);

  if (!context) {
    throw new Error(
      "useAdministracion debe ser usado dentro de un AdminContext"
    );
  }

  return context;
};
