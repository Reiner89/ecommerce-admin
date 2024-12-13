export const Cards = ({
  iconComponent,
  cantidad,
  tittle,
  porcent,
  className,
  select,
}: CardProps) => {
  return (
    <div className="w-full h-full">
      <div className={`card-body relative ${className || "py-4"}`}>
        <div className="row flex w-full text-[#111]">
          {select ? (
            <>{select}</>
          ) : (
            <>
              <div className="body-left w-[66.666667%] px-3">
                {iconComponent && (
                  <div className="icon-container w-[48px] h-[48px] flex justify-center items-center text-[25px] text-white bg-[#111] rounded-lg">
                    {iconComponent}
                  </div>
                )}
                {cantidad && (
                  <h5 className="font-bold text-xl mt-4">{cantidad}</h5>
                )}
                <span className="text-sm">{tittle}</span>
              </div>
              {porcent && (
                <div className="body-right flex flex-col w-[33.333333%] px-3 justify-end items-center">
                  <div className="icon-container w-[48px] h-[48px] flex justify-center items-center text-[25px] text-white bg-[#111] rounded-lg">
                    {porcent}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export interface CardProps {
  iconComponent?: JSX.Element;
  cantidad?: string | number;
  tittle?: string;
  porcent?: string | number | JSX.Element;
  className?: string;
  select?: JSX.Element;
}
