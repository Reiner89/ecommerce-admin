import { IconHome } from "../../../../Components/Icons/Iconos";

export const EncabLeft = ({ areaPadre, areaPagina }: EncabRightProps) => {
  return (
    <div className="relative flex flex-col justify-between xl:w-max mb-2 sm:mb-0">
      <nav className="relative mb-1">
        <ol className="flex flex-wrap items-center p-0 m-0 text-[1.25rem] font-normal leading-relaxed tracking-[0.00938em]">
          <li className="">
            <p className="home text-[1.2rem] text-[rgb(123,128,154)] dark:text-[rgba(255,255,255,0.6)]">
              <IconHome />
            </p>
          </li>
          <li className="text-[rgb(108,117,125)] flex mx-[8px] text-[0.875rem]">
            /
          </li>
          <li className="cont-sidebar leading-[0]">
            <span className="m-0 text-[0.875rem] tracking-[0.02857em] opacity-[1] capitalize text-[rgb(52,71,103)] font-normal dark:text-[rgb(255,255,255)]">
              {areaPadre}
            </span>
          </li>
          {areaPagina && (
            <>
              <li className="text-[rgb(108,117,125)] flex mx-[8px] text-[0.875rem]">
                /
              </li>
              <li className="cont-sidebar leading-[0]">
                <span className="m-0 text-[0.875rem] tracking-[0.02857em] opacity-[1] capitalize text-[rgb(52,71,103)] font-normal dark:text-[rgb(255,255,255)]">
                  {areaPagina}
                </span>
              </li>
            </>
          )}
        </ol>
      </nav>
      <h6 className="text-[1rem] pl-0.5 leading-[1.625] tracking-[0.0075em] opacity-100 text-[rgb(52,71,103)] font-bold font-[Helvetica] dark:text-[rgb(255,255,255)]">
        {areaPagina ? areaPagina : areaPadre}
      </h6>
    </div>
  );
};

interface EncabRightProps {
  areaPadre: string;
  areaPagina?: string;
}
