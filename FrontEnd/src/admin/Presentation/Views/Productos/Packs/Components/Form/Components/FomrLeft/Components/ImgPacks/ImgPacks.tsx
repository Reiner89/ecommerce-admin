import { useState } from "react";
import { ImgCargadas } from "./Components/ImgCargadas";
import { CargarImg } from "./Components/CargarImg";
import { Pack } from "../../../../../../../../../../Interfaces/Pack/Pack";

export const ImgPacks = ({ formPack, imageChange }: Props) => {
  // Estado del focus de la imagen
  const [focusImage, setFocusImage] = useState("");

  return (
    <>
      {formPack.packImages && formPack.packImages.length > 0 ? (
        <ImgCargadas focusImage={focusImage} changeFocus={setFocusImage} />
      ) : (
        <CargarImg imageChange={imageChange} />
      )}
    </>
  );
};

interface Props {
  formPack: Pack;
  imageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
