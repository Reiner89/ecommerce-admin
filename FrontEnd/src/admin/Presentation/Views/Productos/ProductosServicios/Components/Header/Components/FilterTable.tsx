import * as Icon from "../../../../../../Components/Icons/Iconos";

export const FilterTable = ({ txtBtn, modal, openModal, label }: Props) => {
  return (
    <div
      onClick={openModal}
      className="relative flex items-center text-xs text-[#8392ab] gap-2 cursor-pointer"
    >
      <span className="">{label}</span>
      <div className="filtro-prods w-24 relative flex justify-between gap-3 border border-solid border-[#dadce0] rounded px-2 py-1">
        <p className="">{txtBtn}</p>
        {modal ? (
          <Icon.Up className="relative trantision-all" />
        ) : (
          <Icon.Down className="relative trantision-all" />
        )}
      </div>
    </div>
  );
};

interface Props {
  txtBtn: string;
  openModal: () => void;
  modal: boolean;
  label: string;
}
