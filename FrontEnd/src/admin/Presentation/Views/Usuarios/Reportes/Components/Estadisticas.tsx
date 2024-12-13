import { useEffect, useState } from "react";

export const Estadisticas = ({ title, porcentaje }: Props) => {
  // Estado del progreso
  const [progress, setProgress] = useState(0);
  // Estado del color del progreso
  const [colorProgress, setColorProgress] = useState("#4CAF50");

  // Establecemos el progeso
  useEffect(() => {
    setProgress(porcentaje);

    // Cambio color segun porcentaje

    if (porcentaje <= 40) {
      setColorProgress("red");
    } else if (porcentaje >= 40 && porcentaje <= 75) {
      setColorProgress("#141727");
    } else {
      setColorProgress("#2152ff");
    }
  }, [porcentaje]);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex py-2 mb-2">
          <div className="w-full">
            <div className="flex justify-between text-[rgba(58,65,111,.5)] text-[.875rem] font-semibold mb-2">
              <span className="relative">{title}</span>
              <span className="">{porcentaje}%</span>
            </div>
            <div className="">
              <div
                style={{
                  width: `100%`,
                  height: `9px`,
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${progress}%`,
                    height: "100%",
                    backgroundColor: colorProgress,
                    transition: "width 0.5s ease-in-out",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

interface Props {
  title: string;
  porcentaje: number;
}
