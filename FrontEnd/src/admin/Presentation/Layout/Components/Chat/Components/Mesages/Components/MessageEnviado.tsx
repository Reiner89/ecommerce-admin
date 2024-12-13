import { HoraMes } from "../../../../../../Helper/HoraMes";

export const MessageEnviado = ({ date, txt }: Props) => {
  return (
    <div className="relative overflow-hidden m-[26px_0_26px]">
      <div className="float-right w-[46%]">
        <p className="relative bg-[#ebebeb] rounded text-[#646464] text-sm m-0 py-1 px-3 w-full">
          {txt}
        </p>
        <span className="time_date">{HoraMes(date)}</span>
      </div>
    </div>
  );
};

interface Props {
  date: Date;
  txt: string;
}
