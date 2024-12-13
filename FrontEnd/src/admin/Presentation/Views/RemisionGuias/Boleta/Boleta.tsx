import { Toaster } from "sonner";
import * as C from "./Components";
import * as Modal from "../Factura/Components/Modal";
import { useRemisionGuias } from "../../../Hooks/useRemisionGuias";
import { Table } from "../Factura/Components";
import { Layout } from "../../../Layout/Layout";
import { Header } from "./Components/Header/Header";
import { styles } from "../Factura/Components/Modal/PDF/Styles/styles";
import { PDFViewer } from "@react-pdf/renderer";
import { buttonSubmit } from "../../../Styles/Actions";

export const Boleta = () => {
  const {
    tipoBoleta,
    handleTipoBoletaChange,
    modalPDF,
    refPDF,
    handleViewPDF,
  } = useRemisionGuias();

  return (
    <Layout
      areaPadre="Remisión de Guías"
      areaPagina="Boleta"
      children={
        <>
          <Toaster position="bottom-right" richColors />
          <div className="boleta-container rounded-[20px] border border-solid border-[#e0e0e0] bg-[#fff] p-4 text-[#67748e]">
            <Header />
            <div className="flex flex-col px-6 py-8 gap-6">
              <C.TipoBoleta
                tipoBoleta={tipoBoleta}
                handleTipoBoletaChange={handleTipoBoletaChange}
              />
              <C.Form tipoBoleta={tipoBoleta} />
              <Table />
              <C.CalcularBoleta />
            </div>
          </div>
          <Modal.IGV tipoDoc="B" />
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
