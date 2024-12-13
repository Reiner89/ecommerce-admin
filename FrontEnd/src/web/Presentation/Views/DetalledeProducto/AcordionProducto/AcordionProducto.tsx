import { useState } from 'react';
import { Image } from '@nextui-org/react';
import { Box } from '@mui/material';
import zapato1 from '../../../../assets/Img/DescripcionProducto/5FD01200012_1-zapato-de-vestir-clasico-de-cuero-para-hombre-color-canela.webp'
import zapato2 from '../../../../assets/Img/DescripcionProducto/Zapatos-De-Vestir-Calimod-Hombres-Vfd-003--Cuero-Marron---41.webp'
import zapato3 from '../../../../assets/Img/DescripcionProducto/imageUrl_1.webp'


const images = [zapato1, zapato2, zapato3];

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
