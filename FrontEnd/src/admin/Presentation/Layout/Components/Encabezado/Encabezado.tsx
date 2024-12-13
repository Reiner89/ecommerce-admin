import { useConfig } from "../../../Hooks/useConfig";
import { EncabLeft, EncabRight } from "./Components";

interface Props {
  areaPadre: string;
  areaPagina?: string;
}

export const Encabezado = ({ areaPadre, areaPagina }: Props) => {
  // useConfig
  const { isNavbarFixed, scroll } = useConfig();

  return (
    <div
      className={`flex w-full min-h-[4.6875rem] px-3 md:flex-nowrap md:justify-start bg-transparent transition-all duration-[300ms] ease-in-out top-2 z-30 ${
        isNavbarFixed ? "sticky" : "static"
      }`}
    >
      <div
        className={`flex flex-row w-full py-2 px-4 justify-between items-center rounded-2xl ${
          scroll && isNavbarFixed
            ? "scrolled-down dark:shadow-[rgba(52,71,103,0.9)_0rem_0rem_0.0625rem_0.0625rem_inset,rgba(0,0,0,0.05)_0rem_1.25rem_1.6875rem_0rem] dark:bg-[rgba(26,32,53,0.8)]"
            : "scrolled-up"
        }`}
      >
        <EncabLeft areaPagina={areaPagina} areaPadre={areaPadre} />
        <EncabRight />
      </div>
    </div>
  );
};
