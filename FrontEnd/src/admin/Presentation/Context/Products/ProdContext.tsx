import { createContext } from "react";
import { ProdCtx } from "../../../Interfaces/Context/ProdsSev/ProdsSev";

export const ProdContext = createContext<ProdCtx>({} as ProdCtx);
