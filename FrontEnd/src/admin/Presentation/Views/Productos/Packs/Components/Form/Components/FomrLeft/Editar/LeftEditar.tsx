import { Pack } from "../../../../../../../../../Interfaces/Pack/Pack";
import * as Styles from "../../../../../../../../Styles/Actions";
import { ImgPacks } from "../Components/ImgPacks/ImgPacks";

export const LeftEditar = ({
  formPack,
  handleChangePack,
  imagesPack,
}: Props) => {
  return (
    <div className="w-full flex flex-col gap-5">
      <ImgPacks formPack={formPack} imageChange={imagesPack} />
      <div className="cont-input w-full relative">
        <input
          className={Styles.inputL}
          placeholder=" "
          id="packNombre"
          value={formPack.packNombre}
          onChange={handleChangePack}
          required
        />
        <label htmlFor="packNombre" className={Styles.labelL}>
          Nombre del Pack
          <span className="relative text-red-700 ml-1">*</span>
        </label>
      </div>
      <div className="cont-tipo relative flex w-full">
        <input
          className={Styles.inputL}
          placeholder=" "
          id="packSku"
          value={formPack.packSku}
          onChange={handleChangePack}
          required
        />
        <label htmlFor="packSku" className={Styles.labelL}>
          SKU
        </label>
      </div>
      <div className="cont-marca relative flex w-full">
        <input
          className={Styles.inputL}
          placeholder=" "
          id="packTipo"
          value={formPack.packTipo}
          onChange={handleChangePack}
          required
        />
        <label htmlFor="packTipo" className={Styles.labelL}>
          Tipo de Producto
        </label>
      </div>
    </div>
  );
};

interface Props {
  formPack: Pack;
  handleChangePack: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imagesPack: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
