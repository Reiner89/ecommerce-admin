import { useState } from 'react';
import { Image } from '@nextui-org/react';
import { Box } from '@mui/material';
import Smartwatch_Aventadro from "../../../../assets/Img/ListadeProductos/Relojes/Smartwatch Aventador Cerchio.webp"
import zapato2 from "../../../../assets/Img/ListadeProductos/Relojes/relojo.webp"



const images = [Smartwatch_Aventadro, zapato2];

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="flex items-center">
            
            <div className="flex flex-col gap-2 w-24">
                {images.map((image, index) => (
                    <button
                        key={index}
                        className={`border-2 rounded-md w-[70px] ${selectedImage === image ? 'border-[#05e7fc]' : 'border-transparent'
                            }`}
                        onClick={() => setSelectedImage(image)}
                    >
                        <Image
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="rounded-md hover:opacity-80 transition-opacity"
                            width={70}
                            height={70}
                        />
                    </button>
                ))}
            </div>


            <Box className="ml-4 flex-1">
                <Image
                    src={selectedImage}
                    alt="Selected"
                    className="rounded-lg"
                    width={500}
                    height={500}
                    style={{ objectFit: 'cover' }}
                />
            </Box>
        </div>
    );
};

export default ImageGallery;
