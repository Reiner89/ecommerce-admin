import { Toaster } from "sonner";
import { Layout } from "../../../Layout/Layout";
import { Header } from "./Components/Header/Header";
import { Form } from "./Components/Form/Form";
import { DatosEnvio } from "./Components/DatosEnvio/DatosEnvio";
import { PPartida } from "./Components/PPartida/PPartida";
import { Pllegada } from "./Components/PLlegada/Pllegada";
import { Table } from "./Components/Table/Table";
import * as Modal from "../Factura/Components/Modal";
import { useRemisionGuias } from "../../../Hooks/useRemisionGuias";
import { buttonAction, buttonSubmit } from "../../../Styles/Actions";
import { styles } from "../Factura/Components/Modal/PDF/Styles/styles";
import { PDFViewer } from "@react-pdf/renderer";

export const GuiaRemision = () => {
  const { puntoActivo, cambiarPuntoActivo, handleViewPDF, modalPDF, refPDF } =
    useRemisionGuias();

  return (
    <Layout
      areaPadre="Remision de Guias"
      areaPagina="Guía de Remisión"
      children={
        <>
          <Toaster position="bottom-right" richColors />
          <div className="guia-remision-container rounded-[20px] border border-solid border-[#e0e0e0] bg-[#fff] p-4 text-[#67748e] flex flex-col gap-5">
            <Header />
            <div className="container p-6 flex flex-col gap-5">
              <Form />
              <DatosEnvio />
              <div className="container-puntos">
                <ul className="flex flex-wrap w-full justify-start text-sm font-medium text-gray-700  lg:mb-0 ">
                  <li
                    className={`cursor-pointer transition-transform duration-300 p-2 px-4 rounded-t-xl border border-[#09c] ${
                      puntoActivo === "Partida"
                        ? "bg-[#09c] text-white"
                        : " bg-transparent text-[#09c]"
                    }`}
                    onClick={() => cambiarPuntoActivo("Partida")}
                  >
                    Punto de partida
                    <span
                      className={`absolute left-0 bottom-0 w-full h-0.5 bg-gray-200 transform ${
                        puntoActivo === "Partida"
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      } transition-transform duration-300`}
                    />
                  </li>
                  <li
                    className={`cursor-pointer transition-transform duration-300 p-2 px-4 rounded-t-xl border border-[#09c] ${
                      puntoActivo === "Llegada"
                        ? "bg-[#09c] text-white"
                        : "bg-transparent text-[#09c]"
                    }`}
                    onClick={() => cambiarPuntoActivo("Llegada")}
                  >
                    Punto de llegada
                    <span
                      className={`absolute left-0 bottom-0 w-full h-0.5 bg-gray-200 transform ${
                        puntoActivo === "Llegada"
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      } transition-transform duration-300`}
                    />
                  </li>
                </ul>
                {puntoActivo === "Partida" ? <PPartida /> : <Pllegada />}
              </div>
              <Table />
            </div>
            <div className="acction-container flex justify-end gap-4">
              <button type="button" className={buttonAction}>
                Limpiar
              </button>
              <button
                type="button"
                onClick={handleViewPDF}
                className={buttonSubmit}
              >
                Previsualizar
              </button>
            </div>
          </div>
          <Modal.OrdenServicio />
          <Modal.CompRef />
          {modalPDF && (
            <div
              className={`fixed left-0 top-0 right-0 h-full bg-[rgba(0,0,0,0.4)] z-50 flex justify-center items-center transition-all duration-500 ${
                modalPDF ? "visible" : "invisible"
              }`}
            >
              <div
                ref={refPDF}
                className={`absolute flex flex-col justify-between w-[60%] max-w-[900px] rounded-md overflow-hidden transition-transform duration-500 ${
                  modalPDF ? "translate-y-0" : "translate-y-[600%]"
                }`}
              >
                <div className="PDF-container relative flex flex-col gap-2 bg-[#525659] w-full h-full p-4">
                  <PDFViewer style={styles.container}>
                    <Modal.ViewPDF />
                  </PDFViewer>
                  <div className="relative w-full flex justify-center gap-16">
                    <button
                      type="button"
                      onClick={handleViewPDF}
                      className="flex items-center text-xs text-[rgb(52,71,103)] font-bold border border-solid border-[rgb(52,71,103)] bg-white rounded-lg py-2.5 px-6 hover:bg-gray-100 active:opacity-85 cursor-pointer transition-all duration-300"
                    >
                      Cancelar
                    </button>
                    <button
                      type="button"
                      onClick={handleViewPDF}
                      className={buttonSubmit}
                    >
                      Emitir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      }
    />
  );
};
