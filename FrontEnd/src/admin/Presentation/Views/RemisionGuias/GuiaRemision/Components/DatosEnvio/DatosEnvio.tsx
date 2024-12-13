import { useRemisionGuias } from "../../../../../Hooks/useRemisionGuias";
import { Form } from "./Components/Form";
import { Privado } from "./Privado/Privado";
import { Publico } from "./Publico/Publico";

export const DatosEnvio = () => {
  const { DEnvioActivo, cambiarDEnvioActivo } = useRemisionGuias();

  return (
    <div className="detalles-envio-container">
      <div className="bg-[#09c] px-4 text-white w-32 text-sm py-2 rounded-t-lg">
        Datos de envio
      </div>
      <div className="border-1 border border-[#09c] rounded-tl-none rounded-xl px-6 pb-2">
        <div className="flex flex-col gap-y-4">
          <div className="flex gap-x-10 items-center py-4">
            <h1 className="font-semibold uppercase">Tipo de transporte</h1>
            <button
              onClick={() => cambiarDEnvioActivo("Privado")}
              className={`text-xs ${
                DEnvioActivo === "Privado"
                  ? "font-bold border border-solid border-[#09c] rounded-lg py-2.5 px-6 active:opacity-85 cursor-pointer transition-all duration-300 bg-[#09c] text-white focus:opacity-[0.85] focus:shadow-none active:shadow-none"
                  : "text-[rgb(52,71,103)] font-bold border border-solid border-[rgb(52,71,103)] rounded-lg py-2.5 px-6 hover:bg-gray-100 active:opacity-85 cursor-pointer transition-all duration-300"
              }`}
            >
              Privado
            </button>
            <button
              onClick={() => cambiarDEnvioActivo("Publico")}
              className={`text-xs ${
                DEnvioActivo === "Publico"
                  ? "font-bold border border-solid border-[rgb(52,71,103)] rounded-lg py-2.5 px-6 hover:bg-gray-100 active:opacity-85 cursor-pointer transition-all duration-300 bg-[#09c] text-white focus:opacity-[0.85] focus:shadow-none active:shadow-none"
                  : "text-[rgb(52,71,103)] font-bold border border-solid border-[rgb(52,71,103)] rounded-lg py-2.5 px-6 hover:bg-gray-100 active:opacity-85 cursor-pointer transition-all duration-300"
              }`}
            >
              Público
            </button>
          </div>
          <Form />
          <div className="relative flex items-center gap-2">
            <input id="transladosDE" type="checkbox" />
            <label htmlFor="transladosDE" className="text-base font-semibold">
              Translado en vehiculos de categoria M1 o L
            </label>
          </div>
          {DEnvioActivo === "Privado" ? <Privado /> : <Publico />}
        </div>
      </div>
    </div>
  );
};
