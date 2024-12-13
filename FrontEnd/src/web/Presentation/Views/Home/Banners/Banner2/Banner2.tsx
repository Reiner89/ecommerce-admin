import { Button } from "@nextui-org/react"
import { Image } from "@nextui-org/react"
import Sandaliashombre from '../../../../../assets/Img/Home/Banners/Banner2/sandalias hombre.webp'
import playa_wallpaper from '../../../../../assets/Img/Home/Banners/Banner2/mar-palmeras-playa-tropical-wallpaper.webp'
import sandalias_mujer_amarillo from '../../../../../assets/Img/Home/Banners/Banner2/sandalias_mujer_amarillo.webp'
import sandalias_mujer from '../../../../../assets/Img/Home/Banners/Banner2/sandalias_para_mujer.webp'
import playa_sunset from '../../../../../assets/Img/Home/Banners/Banner2/Beautiful-Landscape-Beach-White-Sand-Ocean-Boat-Sunset-HD-Wallpaper-71179562-1.webp'
const Banner2 = () => {
    return (
        <div className="w-full h-[400px] bg-gradient-to-r from-teal-500 to-teal-700 flex items-center justify-between  
         ">

            <div className="flex flex-col justify-center text-white w-2/3 space-y-4 h-full px-8"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${playa_wallpaper})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            >
                <h2 className="text-lg font-medium uppercase">Lo último</h2>
                <h1 className="text-5xl font-bold tracking-wide">Sandalias</h1>
                <Button className="flex items-center justify-center w-[150px] h-[50px] text-teal-700 bg-white rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition">
                    ¡Ir a todo!
                    <span className="ml-2 text-teal-700 text-lg">➜</span>
                </Button>
            </div>


            <div className="flex gap-4 w-2/3 h-[400px] items-center "
            style={{
                backgroundImage: `url(${playa_sunset})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                <div className="flex-1 ">
                    <Image
                        src={sandalias_mujer_amarillo}
                        alt="Modelo con sandalias"
                        className="w-full h-[360px] object-cover rounded-lg shadow-lg"
                    />
                </div>
                <div className="flex-1 flex flex-col gap-4">
                    <Image
                        isBlurred
                        width={370}
                        height={170}
                        src={Sandaliashombre}
                        alt="Sandalia detalle"
                        className="  rounded-lg shadow-lg"
                    />
                    <Image
                        isBlurred
                        width={370}
                        height={170}
                        src={sandalias_mujer}
                        alt="Sandalia completa"
                        className=" rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Banner2