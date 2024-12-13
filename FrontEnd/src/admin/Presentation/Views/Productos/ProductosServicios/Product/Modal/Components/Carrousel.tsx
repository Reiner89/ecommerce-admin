import { useState } from "react";

export const Carrousel = ({ images }: Props) => {
  // Estado de la imagen activa
  const [activeImage, setActiveImage] = useState(0);

  // Si esta vacio
  if (images.length === 0) return null;

  return (
    <>
      <div className="relative flex items-center">
        <img
          className="h-auto w-full max-w-full rounded-xl mx-auto shadow-lg transition-all duration-300"
          src={images[activeImage]}
          alt={`image-${activeImage}`}
        />
      </div>
      <div className="w-full flex flex-row justify-center pt-2 mt-6">
        {images.map((image, index) => (
          <div
            key={image}
            className="w-[50px] mx-2 cursor-pointer"
            onClick={() => setActiveImage(index)}
          >
            <img
              className={`h-auto max-w-full shadow ${
                index === activeImage
                  ? "border-b-4 border-[#343E49]"
                  : "border-none border-b-0"
              }`}
              src={image}
              alt={`image-${index}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

interface Props {
  images: string[];
}
