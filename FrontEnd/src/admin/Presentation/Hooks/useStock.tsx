import { useContext } from "react";
import { StockCTX } from "../../Interfaces/Context/Stock/StockCTX";
import { StockContext } from "../Context/Stock/StockContext";

export const useStock = (): StockCTX => {
  const stockContext = useContext(StockContext);

  if (!stockContext) {
    throw new Error("useStock must be used within a StockContext");
  }

  return stockContext;
};
