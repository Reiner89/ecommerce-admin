import { useState } from "react";
import { ImgCargadas } from "./Components/ImgCargadas";
import { CargarImg } from "./Components/CargarImg";
import { useProdServices } from "../../../../../../Hooks/useProdServices";

export const ImgProds = () => {
  const { imagesProducts, imageChange, selectedProd } = useProdServices();

  // Estado del focus de la imagen
  const [focusImage, setFocusImage] = useState("");

  return (
    <>
      {selectedProd ? (
        <>
          {imagesProducts.length > 0 ? (
            <ImgCargadas focusImage={focusImage} changeFocus={setFocusImage} />
          ) : (
            <CargarImg imageChange={imageChange} />
          )}
        </>
      ) : (
        <>
          {imagesProducts.length > 0 ? (
            <ImgCargadas focusImage={focusImage} changeFocus={setFocusImage} />
          ) : (
            <CargarImg imageChange={imageChange} />
          )}
        </>
      )}
    </>
  );
};
