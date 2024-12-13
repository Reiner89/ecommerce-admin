import { Image } from "@nextui-org/image";
import hombre from '../../../../assets/Img/Home/BannerSplashart/SectorArt/hombre_logo.webp'
import mujer from '../../../../assets/Img/Home/BannerSplashart/SectorArt/mujer.webp'
import Reloj_zurdo from '../../../../assets/Img/Home/BannerSplashart/Slash2/reloj_zurdos.webp'
import zapatos_vestir from '../../../../assets/Img/Home/BannerSplashart/Slash2/zapatos_vestir.webp'
import blusas_floreadas from '../../../../assets/Img/Home/BannerSplashart/Slash2/blusas_floreadas.webp'
const BannerSplash = () => {
    return (
        <div className="w-full h-[750px] flex justify-center  flex-col space-y-4">
            <div className="w-full h-[350px] flex justify-center space-x-4">
                <div className=" w-[30%] flex bg-slate-800 rounded-xl ">
                    <div className=" w-[45%] h-full bg-neutral-100  flex flex-col items-center py-5 space-y-2  ">
                        <h1 className=" font-serif text-[30px]">Moda Hombre</h1>
                        <div className=" bg-[#005ef6] rounded-full w-[220px] h-[50px]  flex items-center justify-center">
                            <h2 className="text-[15px] text-[#fff]">Tendencia en esta temporada</h2>

                        </div>
                        <h1 className="text-[70px] font-bold">25</h1>
                        <h1 className="text-[25px]">%DSCTO</h1>
                        <h1>En marcas seleccionadas</h1>
                    </div>
                    <div className="w-[60%] h-full z-40  flex items-center justify-center">
                        <Image
                            isZoomed
                            isBlurred
                            width={340}
                            height={350}
                            radius="none"
                            src={hombre}
                            alt="NextUI Album Cover"


                        />
                    </div>
                </div>
                <div className=" w-[30%] flex bg-slate-800 rounded-xl">
                    <div className="w-[40%] h-full bg-neutral-100 flex flex-col items-center py-5 space-y-2  ">
                        <h1 className=" font-serif text-[30px]">Moda Mujer</h1>
                        <div className=" bg-[#005ef6] rounded-full w-[220px] h-[50px]  flex items-center justify-center">
                            <h2 className="text-[15px] text-[#fff]">Tendencia en esta temporada</h2>

                        </div>
                        <h1 className="text-[70px] font-bold">25</h1>
                        <h1 className="text-[25px]">%DSCTO</h1>
                        <h1>En marcas seleccionadas</h1>
                    </div>
                    <div className="w-[60%] h-full flex items-center justify-center">
                        <Image
                            isZoomed
                            isBlurred
                            radius="none"
                            width={340}
                            height={350}
                            src={mujer}
                            alt="NextUI Album Cover"

                        />
                    </div>
                </div>
            </div>
            <div className="h-[350px] flex space-x-5 justify-center">
                <div className="h-[300px] w-[20%] bg-neutral-100 rounded-xl hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                    <Image
                        isBlurred
                        width={450}
                        height={230}
                        src={Reloj_zurdo}
                        radius="none"
                        alt="NextUI Album Cover"
                        className="rounded-t-lg"
                    />
                    <div className="flex rounded-b-xl">
                        
                        <div className="w-[40%] flex flex-col justify-center pl-3 h-[70px] bg-[#6ec70f] rounded-bl-xl hover:bg-[#5ca90c] transition-colors duration-300">
                            <h1 className="text-[20px] font-bold text-white">Relojes</h1>
                            <h1 className="text-[15px] font-bold text-white">Unisex</h1>
                        </div>
                       
                        <div className="w-[60%] bg-slate-500 rounded-br-xl flex flex-col items-center justify-center text-[#fff] hover:bg-slate-600 transition-colors duration-300">
                            <h1 className="text-[30px] font-thin mb-[-7px]">30% DSCTO</h1>
                            <h1 className="text-[10px] font-bold">En productos seleccionados</h1>
                        </div>
                    </div>
                </div>


                <div className="h-[300px] w-[20%] rounded-xl hover:scale-105 transition-transform duration-300 hover:shadow-lg ">
                    <Image

                        isBlurred
                        width={450}
                        height={230}
                        src={blusas_floreadas}
                        radius="none"
                        alt="NextUI Album Cover"
                        className=" rounded-t-lg"

                    />
                    <div className="flex rounded-b-xl">
                        <div className="w-[40%] flex flex-col justify-center pl-3  h-[70px]  bg-[#6ec70f] rounded-bl-xl hover:bg-[#5ca90c] transition-colors duration-300 ">
                            <h1 className="text-[20px] font-bold text-white">Blusas</h1>
                            <h1 className="text-[15px] font-bold text-white">Mujer</h1>
                        </div >
                        <div className="w-[60%] bg-slate-500 rounded-br-xl flex flex-col items-center justify-center text-[#fff] hover:bg-slate-600 transition-colors duration-300">
                            <h1 className="text-[30px] font-thin mb-[-7px]">30% DSCTO</h1>
                            <h1 className="text-[10px] font-bold">En productos seleccionados</h1>
                        </div>

                    </div>
                </div>

                <div className="h-[300px] w-[20%]  rounded-xl hover:scale-105 transition-transform duration-300 hover:shadow-lg ">
                    <Image

                        isBlurred
                        width={450}
                        height={230}
                        src={zapatos_vestir}
                        radius="none"
                        alt="NextUI Album Cover"
                        className=" rounded-t-lg"

                    />
                    <div className="flex rounded-b-xl">
                        <div className="w-[40%] flex flex-col justify-center pl-3  h-[70px]  bg-[#6ec70f] rounded-bl-xl hover:bg-[#5ca90c] transition-colors duration-300 ">
                            <h1 className="text-[20px] font-bold text-white">Zapatos</h1>
                            <h1 className="text-[15px] font-bold text-white">Hombre</h1>
                        </div >
                        <div className="w-[60%] bg-slate-500 rounded-br-xl flex flex-col items-center justify-center text-[#fff] hover:bg-slate-600 transition-colors duration-300">
                            <h1 className="text-[30px] font-thin mb-[-7px]">30% DSCTO</h1>
                            <h1 className="text-[10px] font-bold">En productos seleccionados</h1>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerSplash