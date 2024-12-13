import ImageDefault from "../../../../../../../assets/FotoUsuario.webp";
import { HoraMes } from "../../../../../../Helper/HoraMes";

export const MessageRecibido = ({ date, txt }: Props) => {
  return (
    <div className="">
      <div className="relative inline-block w-[6%]">
        <img
          src={ImageDefault}
          alt="ImagePerfil"
          className="relative block visible w-full h-full overflow-y-hidden overflow-x-hidden rounded-full object-cover object-center"
        />
      </div>
      <div className="relative inline-block p-[0_0_0_10px] align-top w-[92%]">
        <div className="relative w-[57%]">
          <p className="relative bg-[#ebebeb] rounded-sm text-[#646464] text-sm py-1 px-2 w-full">
            {txt}
          </p>
          <span className="time_date">{HoraMes(date)}</span>
        </div>
      </div>
    </div>
  );
};

interface Props {
  date: Date;
  txt: string;
}
