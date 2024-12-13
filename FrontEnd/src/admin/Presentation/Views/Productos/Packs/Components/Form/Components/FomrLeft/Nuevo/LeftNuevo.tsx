import { Pack } from "../../../../../../../../../Interfaces/Pack/Pack";
import { ImgPacks } from "../Components/ImgPacks/ImgPacks";

export const LeftNuevo = ({ formPack, imagesPack }: Props) => {
  return <ImgPacks formPack={formPack} imageChange={imagesPack} />;
};

interface Props {
  formPack: Pack;
  imagesPack: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
