import { useState } from "react";

interface FabProps {
  icono: React.ReactElement;
  texto?: string;
  showDiv?: boolean;
  buttonRef?: React.RefObject<HTMLButtonElement>;
  showModal: () => void;
}

export const FAB = ({
  icono,
  texto,
  showDiv = true,
  showModal,
  buttonRef,
}: FabProps) => {
  // Estado para mostrar/ocultar texto
  const [active, setActive] = useState(false);

  const handleIcon = () => {
    setActive(!active);
  };

  return (
    <button
      ref={buttonRef}
      className="relative cursor-pointer mx-1"
      type="button"
      onMouseEnter={handleIcon}
      onMouseLeave={handleIcon}
      onClick={showModal}
    >
      <div className="contIcon flex text-[1.5rem] text-[#09c] min-w-[40px] w-auto h-auto justify-center p-2 hover:bg-[#deedf4] rounded-full">
        {icono}
      </div>
      {showDiv && (
        <div className="absolute z-20">
          <div
            className={`relative text-[.75rem] text-white font-semibold bg-[#39404a] px-2 py-1 rounded duration-200 ${
              active ? "opacity-100" : "opacity-0"
            }`}
          >
            {texto}
          </div>
        </div>
      )}
    </button>
  );
};
