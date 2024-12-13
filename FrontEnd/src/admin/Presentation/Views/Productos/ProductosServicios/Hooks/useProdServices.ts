import { useContext } from "react";
import { ProdContext } from "../../../../Context/Products/ProdContext";

export const useProdServices = () => {
  const context = useContext(ProdContext);

  if (!context) {
    throw new Error("useProdServices must be used within a ProdContext");
  }

  return context;
};
