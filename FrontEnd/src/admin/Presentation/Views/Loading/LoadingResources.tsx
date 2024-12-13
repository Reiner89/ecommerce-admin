import ImgLoading from "../../../assets/Gif.gif";

export const LoadResources = () => {
  return (
    <div className="relative w-full h-[100vh] min-h-[100vh] flex flex-col justify-center items-center bg-gradient-to-bl from-gray-800 via-gray-700 to-gray-800 transition-all duration-300">
      <img src={ImgLoading} alt="loading" />
      <p className="text-white text-lg font-bold">Cargando Recursos...</p>
    </div>
  );
};
