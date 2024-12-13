import { useProdServices } from "../../../../../../../../ProductosServicios/Hooks/useProdServices";

export const ImgCargadas = ({ focusImage, changeFocus }: Props) => {
  const { formPack, limpiarImgPack } = useProdServices();

  return (
    <div className="w-full flex flex-col gap-y-5">
      <div className="header-images w-full flex justify-between">
        <h2 className="relative text-base text-[#4e5865] font-semibold">
          Imágenes
        </h2>
        <button
          type="button"
          className="relative text-xs text-[#09c] font-semibold border border-solid border-[#09c] rounded-lg py-2 px-8 transition-all duration-300"
          onClick={limpiarImgPack}
        >
          Remover
        </button>
      </div>
      <div className="cont-image-pack scroll max-h-[280px] flex flex-wrap gap-5 justify-center py-3 overflow-y-scroll">
        {formPack.packImages.map((img) => (
          <div
            key={img}
            className="cont-img-producto lg:w-full flex justify-center"
          >
            <img
              src={img}
              alt={`img-${img}`}
              className={`w-full h-full max-w-[300px] max-h-[250px] rounded-xl object-cover object-center shadow-lg cursor-pointer ${
                focusImage === img
                  ? "border-4 border-solid border-[#09c]"
                  : "border-none"
              }`}
              onClick={() => changeFocus(img)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

interface Props {
  focusImage: string;
  changeFocus: (img: string) => void;
}
