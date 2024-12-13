import { SwitchInput } from "../../../../../Components";
import * as Icon from "../../../../../Components/Icons/Iconos";
import { useProdServices } from "../../Hooks/useProdServices";
import { buttonSubmit } from "../../../../../Styles/Actions";

export const AImpuestos = () => {
  const {
    formImp,
    loadingImp,
    changeFormImp,
    submitFormImp,
    modalImp,
    closeModalImp,
    refModalImp,
  } = useProdServices();

  return (
    <div
      className={`asociar-impuestos-container fixed w-full h-full top-0 bottom-0 left-0 right-0 z-50 bg-[rgba(0,0,0,0.4)] transition-all duration-300 ${
        modalImp ? "visible" : "invisible"
      }`}
    >
      <div
        ref={refModalImp}
        className={`asociar-impuestos block absolute top-0 right-0 bottom-0 w-[45%] h-full bg-gray-50 transition-all duration-300 ${
          modalImp ? "translate-x-[0%]" : "translate-x-[100%]"
        }`}
      >
        <form
          className="w-full h-full relative flex flex-col gap-5 p-6 overflow-y-auto"
          onSubmit={submitFormImp}
        >
          <div className="asociar-impuestos-header flex justify-between items-center text-xl text-[#344767]">
            <h2 className="relative font-semibold">Asociar Impuestos</h2>
            <p
              className="container-icon cursor-pointer"
              onClick={closeModalImp}
            >
              <Icon.Close />
            </p>
          </div>
          <div className="form-impuestos w-full h-full relative flex flex-col gap-4 bg-white p-3.5 rounded-xl">
            <div className="cont-igv flex items-center">
              <SwitchInput
                checkedStatus={formImp.igv}
                handleChange={() =>
                  changeFormImp({
                    target: {
                      id: "igv",
                      type: "checkbox",
                      checked: !formImp.igv,
                    },
                  } as React.ChangeEvent<HTMLInputElement>)
                }
              />
              <p className="relative text-[.875rem] text-[#4e5865] font-light ml-1">
                IGV (18%)
              </p>
            </div>
            <div className="cont-exonerado flex items-center">
              <SwitchInput
                checkedStatus={formImp.exonerado}
                handleChange={() =>
                  changeFormImp({
                    target: {
                      id: "exonerado",
                      type: "checkbox",
                      checked: !formImp.exonerado,
                    },
                  } as React.ChangeEvent<HTMLInputElement>)
                }
              />
              <p className="relative text-[.875rem] text-[#4e5865] font-light ml-1">
                Exonerado (0.0%)
              </p>
            </div>
            <div className="cont-paraExportacion flex items-center">
              <SwitchInput
                checkedStatus={formImp.paraExportacion}
                handleChange={() =>
                  changeFormImp({
                    target: {
                      id: "paraExportacion",
                      type: "checkbox",
                      checked: !formImp.paraExportacion,
                    },
                  } as React.ChangeEvent<HTMLInputElement>)
                }
              />
              <p className="relative text-[.875rem] text-[#4e5865] font-light ml-1">
                Para Exportación (0.0%)
              </p>
            </div>
            <div className="cont-icbper flex items-center">
              <SwitchInput
                checkedStatus={formImp.icbPer}
                handleChange={() =>
                  changeFormImp({
                    target: {
                      id: "icbPer",
                      type: "checkbox",
                      checked: !formImp.icbPer,
                    },
                  } as React.ChangeEvent<HTMLInputElement>)
                }
              />
              <p className="relative text-[.875rem] text-[#4e5865] font-light ml-1">
                ICBPER (0.5%)
              </p>
            </div>
            <div className="cont-button w-full h-full flex flex-col justify-end">
              <button className={buttonSubmit} disabled={loadingImp}>
                {loadingImp ? "Guardando..." : "Guardar"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
