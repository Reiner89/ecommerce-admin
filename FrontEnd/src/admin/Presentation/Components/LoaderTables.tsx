import { IconLoaderTables } from "./Icons/Iconos";

export const LoaderTables = () => {
  return (
    <div className="relative min-h-[250px] flex items-center justify-center">
      <div className="cont-loader flex w-full h-full justify-center items-center">
        <IconLoaderTables className="w-10 h-10 text-[#09c] animate-spin" />
      </div>
    </div>
  );
};
