import { Toaster } from "sonner";
import { useRemisionGuias } from "../../../Hooks/useRemisionGuias";
import { Layout } from "../../../Layout/Layout";
import { Table } from "./Components";
import { Header } from "./Components/TipoDoc/Components/Header/Header";
import * as C from "./Factura/Components";
import * as Modal from "./Components/Modal";
import { PDFViewer } from "@react-pdf/renderer";
import { styles } from "./Components/Modal/PDF/Styles/styles";
import { buttonSubmit } from "../../../Styles/Actions";

export const Factura = () => {
  const {
    tipoFactura,
    handleTipoFacturaChange,
    modalPDF,
    refPDF,
    handleViewPDF,
  } = useRemisionGuias();

  return (
    <Layout
      areaPadre="Remisión de Guías"
      areaPagina="Factura"
      children={
        <>
          <Toaster position="bottom-right" richColors />
          <div className="factura-container rounded-[20px] border border-solid border-[#e0e0e0] bg-[#fff] p-4 text-[#67748e]">
            <Header tipo="Factura" tipoDoc="F" />
            <div className="flex flex-col px-6 py-8 gap-6">
              <C.TipoFactura
                tipoFactura={tipoFactura}
                handleTipoFacturaChange={handleTipoFacturaChange}
              />
              <C.Form tipoFactura={tipoFactura} />
              <Table />
              <C.CalcularFactura />
            </div>
          </div>
          <Modal.IGV tipoDoc="F" />
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
