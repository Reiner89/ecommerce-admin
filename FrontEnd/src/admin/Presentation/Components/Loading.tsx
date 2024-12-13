import { IconLoader } from "./Icons/Iconos";

export const Loading = () => {
  return (
    <div className="cont-loader flex w-full h-[100vh] justify-center items-center">
      <IconLoader className="w-14 h-14 text-[#09c] animate-spin" />
    </div>
  );
};
