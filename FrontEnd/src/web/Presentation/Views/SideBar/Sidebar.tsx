import { useState } from "react";
import { BiSolidOffer } from "react-icons/bi";
import { SlArrowRight } from "react-icons/sl";
import { AiOutlineDesktop } from "react-icons/ai";
import { IoWomanSharp } from "react-icons/io5";
import { FaMale } from "react-icons/fa";
import { GiConverseShoe } from "react-icons/gi";
import { FaBabyCarriage } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { TbChristmasBall } from "react-icons/tb";
import { MdSportsSoccer } from "react-icons/md";
import { BsBoxSeamFill } from "react-icons/bs";
import { PiCookingPotFill } from "react-icons/pi";
import { TbGardenCart } from "react-icons/tb";
import { MdOutlinePets } from "react-icons/md";
import { FaStoreAlt } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { MdChildCare } from "react-icons/md";
import { Drawer} from "@mui/material";
import OfertasUnicas from "./SubCategorias/OfertaUnica/OfertasUnicas";

function Sidebar_Past() {
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    const handleMouseEnter = (item: string) => {
        setActiveItem(item);
        setDrawerOpen(true);
    };

    const handleMouseLeave = () => {
        setActiveItem(null);
        setDrawerOpen(false);
    };
    
    
    
    return (
        <div className=' pt-0 space-y-[80px] '>
            <div className=' mt-[-90px] h-[70px] flex items-center fixed w-[350px] px-8 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-2xl'>
                <h2 className='text-[#fff] font-bold'>Bienvenido</h2>
            </div>
            <div className="w-full  flex justify-center h-[90%] overflow-y-scroll-scroll">
                <div className=" bg-[#f41313 w-[98%] ">
                <div
                        className="flex items-center space-x-10 px-8 h-[60px] hover:bg-gray-700 hover:rounded-xl group transition-all duration-300"
                        onMouseEnter={() => handleMouseEnter("ofertas")}
                        onMouseLeave={handleMouseLeave}
                    >
                        <h2 className="text-black font-thin w-[220px] flex group-hover:text-white group-hover:font-semibold transition-all duration-300">
                            Grandes Ofertas
                            <BiSolidOffer size={25} className="ml-auto" />
                        </h2>
                        <SlArrowRight className="text-black group-hover:text-white transition-all duration-300" />

                        <Drawer
                        anchor="right"
                        open={drawerOpen && activeItem === "ofertas"}
                        onClose={handleMouseLeave}
                    >
                       <OfertasUnicas/>
                    </Drawer>


                    </div>
                    <div className="flex items-center space-x-10 px-8 h-[60px] hover:bg-gray-700 hover:rounded-xl group transition-all duration-300">
                        <h2 className="text-black font-thin w-[220px] flex group-hover:text-white group-hover:font-semibold  transition-all duration-300">
                            Tecnología
                            <AiOutlineDesktop size={25} className="ml-auto " />
                        </h2>
                        <SlArrowRight className="text-black group-hover:text-white transition-all duration-200" />
                    </div>

                    <div className="flex items-center space-x-10 px-8 h-[60px] hover:bg-gray-700 hover:rounded-xl group transition-all duration-300">
                        <h2 className="text-black font-thin w-[220px] flex group-hover:text-white group-hover:font-semibold  transition-all duration-300">
                            Electrohogar
                            <AiOutlineDesktop size={25} className="ml-auto " />
                        </h2>
                        <SlArrowRight className="text-black group-hover:text-white transition-all duration-200" />
                    </div>

                    <div className="flex items-center space-x-10 px-8 h-[60px] hover:bg-gray-700 hover:rounded-xl group transition-all duration-300">
                        <h2 className="text-black font-thin w-[220px] flex group-hover:text-white group-hover:font-bold transition-all duration-300">
                            Muebles y Organización
                            <BsBoxSeamFill size={25} className="ml-auto " />
                        </h2>
                        <SlArrowRight className="text-black group-hover:text-white transition-all duration-300" />
                    </div>

                    <div className=" flex items-center space-x-10 px-8  h-[60px] hover:bg-gray-700 hover:rounded-xl group transition-all duration-300 ">
                        <h2 className='text-[#000] font-thin  w-[220px] flex group-hover:text-white group-hover:font-bold transition-all duration-300'>Dormitorio
                            <IoIosBed size={25} className="ml-auto" />
                        </h2>
                        <SlArrowRight className="text-black group-hover:text-white transition-all duration-300" />
                    </div>

                    <div className=" flex items-center space-x-10 px-8  h-[60px] hover:bg-gray-700 hover:rounded-xl group transition-all duration-300 ">
                        <h2 className='text-[#000] font-thin  w-[220px] flex group-hover:text-white group-hover:font-bold transition-all duration-300'>Mujer
                            <IoWomanSharp size={25} className="ml-auto" />
                        </h2>
                        <SlArrowRight className="text-black group-hover:text-white transition-all duration-300" />
                    </div>

                    <div className=" flex items-center space-x-10 px-8  h-[60px] hover:bg-gray-700 hover:rounded-xl group transition-all duration-300">
                        <h2 className='text-[#000] font-thin  w-[220px] flex group-hover:text-white group-hover:font-bold transition-all duration-300'>Hombre
                            <FaMale size={25} className="ml-auto" />
                        </h2>
                        <SlArrowRight className="text-black group-hover:text-white transition-all duration-300" />
                    </div>

                    <div className=" flex items-center space-x-10 px-8  h-[60px] hover:bg-gray-700 hover:rounded-xl group transition-all duration-300">
                        <h2 className='text-[#000] font-thin  w-[220px] flex group-hover:text-white group-hover:font-bold transition-all duration-300'>Calzado
                            <GiConverseShoe size={25} className="ml-auto" />
                        </h2>
                        <SlArrowRight className="text-black group-hover:text-white transition-all duration-300" />
                    </div>

                    <div className=" flex items-center space-x-10 px-8  h-[60px] hover:bg-gray-700 hover:rounded-xl group transition-all duration-300">
                        <h2 className='text-[#000] font-thin  w-[220px] flex group-hover:text-white group-hover:font-bold transition-all duration-300'>Accesorios Moda

                            <AiOutlineDesktop size={25} className="ml-auto" />
                        </h2>
                        <SlArrowRight className="text-black group-hover:text-white transition-all duration-300" />
                    </div>

                    <div className=" flex items-center space-x-10 px-8  h-[60px] hover:bg-gray-700 hover:rounded-xl group transition-all duration-300">
                        <h2 className='text-[#000] font-thin  w-[220px] flex group-hover:text-white group-hover:font-bold transition-all duration-300'>Belleza y Salud
                            <AiOutlineDesktop size={25} className="ml-auto" />
                        </h2>
                        <SlArrowRight className="text-black group-hover:text-white transition-all duration-300" />
                    </div>

                    <div className=" flex items-center space-x-10 px-8  h-[60px] hover:bg-gray-700 hover:rounded-xl group transition-all duration-300 ">
                        <h2 className='text-[#000] font-thin  w-[220px] flex group-hover:text-white group-hover:font-bold transition-all duration-300'>Niñoz y Jueguetes
                            <MdChildCare size={25} className="ml-auto" />
                        </h2>
                        <SlArrowRight className="text-black group-hover:text-white transition-all duration-300" />
                    </div>

                    <div className=" flex items-center space-x-10 px-8  h-[60px] hover:bg-gray-700 hover:rounded-xl group transition-all duration-300">
                        <h2 className='text-[#000] font-thin  w-[220px] flex'>Bebés
                            <FaBabyCarriage size={25} className="ml-auto" />
                        </h2>
                        <SlArrowRight className="text-black group-hover:text-white transition-all duration-300" />
                    </div>

                    <div className=" flex items-center space-x-10 px-8  h-[60px] hover:bg-gray-700 hover:rounded-xl group transition-all duration-300 ">
                        <h2 className='text-[#000] font-thin  w-[220px] flex group-hover:text-white group-hover:font-bold transition-all duration-300'>Deportes y aire libre
                            <MdSportsSoccer size={25} className="ml-auto" />
                        </h2>
                        <SlArrowRight className="text-black group-hover:text-white transition-all duration-300" />
                    </div>

                    <div className=" flex items-center space-x-10 px-8  h-[60px] hover:bg-gray-700 hover:rounded-xl group transition-all duration-300 ">
                        <h2 className='text-[#000] font-thin  w-[220px] flex group-hover:text-white group-hover:font-bold transition-all duration-300'>Cocina y menaje
                            <PiCookingPotFill size={25} className="ml-auto" />
                        </h2>
                        <SlArrowRight className="text-black group-hover:text-white transition-all duration-300" />
                    </div>

                    <div className=" flex items-center space-x-10 px-8  h-[60px] hover:bg-gray-700 hover:rounded-xl group transition-all duration-300 ">
                        <h2 className='text-[#000] font-thin  w-[220px] flex group-hover:text-white group-hover:font-bold transition-all duration-300'>Decoración e Iluminación
                            <AiOutlineDesktop size={25} className="ml-auto" />
                        </h2>
                        <SlArrowRight className="text-black group-hover:text-white transition-all duration-300" />
                    </div>

                    <div className=" flex items-center space-x-10 px-8  h-[60px] hover:bg-gray-700 hover:rounded-xl group transition-all duration-300 ">
                        <h2 className='text-[#000] font-thin  w-[220px] flex group-hover:text-white group-hover:font-bold transition-all duration-300'>Navidad
                            <TbChristmasBall size={25} className="ml-auto" />
                        </h2>
                        <SlArrowRight className="text-black group-hover:text-white transition-all duration-300" />
                    </div>

                    <div className=" flex items-center space-x-10 px-8  h-[60px] hover:bg-gray-700 hover:rounded-xl group transition-all duration-300">
                        <h2 className='text-[#000] font-thin  w-[220px] flex group-hover:text-white group-hover:font-bold transition-all duration-300'>Playa
                            <FaUmbrellaBeach size={25} className="ml-auto" />
                        </h2>
                        <SlArrowRight className="text-black group-hover:text-white transition-all duration-300" />
                    </div>

                    <div className=" flex items-center space-x-10 px-8  h-[60px] hover:bg-gray-700 hover:rounded-xl group transition-all duration-300 ">
                        <h2 className='text-[#000] font-thin  w-[220px] flex group-hover:text-white group-hover:font-bold transition-all duration-300'>Jardín y terraza
                            <TbGardenCart size={25} className="ml-auto" />
                        </h2>
                        <SlArrowRight className="text-black group-hover:text-white transition-all duration-300" />
                    </div>

                    <div className=" flex items-center space-x-10 px-8  h-[60px] hover:bg-gray-700 hover:rounded-xl group transition-all duration-300 ">
                        <h2 className='text-[#000] font-thin  w-[220px] flex group-hover:text-white group-hover:font-bold transition-all duration-300'>Mascotas
                            <MdOutlinePets size={25} className="ml-auto" />
                        </h2>
                        <SlArrowRight className="text-black group-hover:text-white transition-all duration-300" />
                    </div>

                    <div className=" flex items-center space-x-10 px-8  h-[60px] hover:bg-gray-700 hover:rounded-xl group transition-all duration-300">
                        <h2 className='text-[#000] font-thin  w-[220px] flex group-hover:text-white group-hover:font-bold transition-all duration-300'>Supermercado y Gourmet
                            <FaStoreAlt size={25} className="ml-auto" />
                        </h2>
                        <SlArrowRight className="text-black group-hover:text-white transition-all duration-300" />
                    </div>

                    <div className=" flex items-center space-x-10 px-8  h-[60px] hover:bg-gray-700 hover:rounded-xl group transition-all duration-300">
                        <h2 className='text-[#000] font-thin  w-[220px] flex items-center group-hover:text-white group-hover:font-bold transition-all duration-300'>Equipamento de baño y cocina
                            <AiOutlineDesktop size={25} className="ml-auto" />
                        </h2>
                        <SlArrowRight className="text-black group-hover:text-white transition-all duration-300" />
                    </div>

                    <div className=" flex items-center space-x-10 px-8  h-[60px] hover:bg-gray-700 hover:rounded-xl group transition-all duration-300 justify-center ">
                        <h2 className='text-[#000] font-thin  w-[220px] flex items-center group-hover:text-white group-hover:font-bold transition-all duration-300'>Herramientas , Ferreteria y Construcción
                            <FaTools size={25} className="ml-auto" />
                        </h2>
                        <SlArrowRight className="text-black group-hover:text-white transition-all duration-300" />
                    </div>

                    <div className=" flex items-center space-x-10 px-8  h-[60px] hover:bg-gray-700 hover:rounded-xl group transition-all duration-300 ">
                        <h2 className='text-[#000] font-thin  w-[220px] flex group-hover:text-white group-hover:font-bold transition-all duration-300'>Automotriz
                            <AiOutlineDesktop size={25} className="ml-auto" />
                        </h2>
                        <SlArrowRight className="text-black group-hover:text-white transition-all duration-300" />
                    </div>

                    <div className=" flex items-center space-x-10 px-8  h-[60px] hover:bg-gray-700 hover:rounded-xl group transition-all duration-300 ">
                        <h2 className='text-[#000] font-thin  w-[220px] flex group-hover:text-white group-hover:font-bold transition-all duration-300'>Otras Categorias
                            <AiOutlineDesktop size={25} className="ml-auto" />
                        </h2>
                        <SlArrowRight className="text-black group-hover:text-white transition-all duration-300" />
                    </div>
                </div>
                
            </div>
        

        </div>
    )
}

export default Sidebar_Past