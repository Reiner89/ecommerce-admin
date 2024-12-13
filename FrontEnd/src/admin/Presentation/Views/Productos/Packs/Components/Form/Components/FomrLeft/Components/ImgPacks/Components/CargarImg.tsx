import * as Icon from "../../../../../../../../../../Components/Icons/Iconos";

export const CargarImg = ({ imageChange }: Props) => {
  return (
    <div className="cont-image-pack flex items-center justify-center w-full">
      <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={imageChange}
          multiple
        />
        <div className="flex flex-col items-center justify-center pt-5 pb-6 text-[23px] text-center">
          <Icon.Exportar />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 font-semibold">
            Cargar 4 imágenes del Pack
          </p>
        </div>
      </label>
    </div>
  );
};

interface Props {
  imageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
