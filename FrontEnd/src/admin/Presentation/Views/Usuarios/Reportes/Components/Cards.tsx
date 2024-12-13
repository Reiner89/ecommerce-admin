import { Refresh } from "../../../../Components/Icons/Iconos";

export const Cards = ({
  iconComponent,
  cantidad,
  tittle,
  background,
  changeTable,
}: CardProps) => {
  return (
    <div className="card-container w-full h-full">
      <div className="card-content w-full h-full flex flex-col text-white gap-5">
        <div className="card-body flex p-4">
          <div className="body-left w-1/2">
            <div
              className={`icon-container text-2xl ${background} rounded-full h-12 w-12 flex items-center justify-center`}
            >
              {iconComponent}
            </div>
          </div>
          <div className="body-right w-1/2">
            <div className="info-container text-right">
              <p className="relative text-[grey] dark:text-[#9a9a9a] text-xs font-normal">
                {tittle}
              </p>
              <h3 className="relative text-[#1d253b] dark:text-white text-2xl font-light">
                {cantidad}
              </h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <hr className="my-1.5 mx-4 border-[rgba(29,37,59,.1)] dark:border-[#2b3553]" />
          <div
            onClick={changeTable}
            className="icon-container text-[grey] dark:text-[hsla(0,0%,100%,.6)] text-lg flex gap-2 items-center my-2.5 mx-4 cursor-pointer"
          >
            <Refresh />
            <p className="text-xs">Actualizar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface CardProps {
  iconComponent: JSX.Element;
  cantidad: string | number;
  tittle: string;
  changeTable: () => void;
  background: string;
}
