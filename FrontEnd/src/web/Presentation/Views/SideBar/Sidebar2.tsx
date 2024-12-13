import { useState } from 'react';
import { BiSolidOffer } from "react-icons/bi";
import { SlArrowRight } from "react-icons/sl";
import { AiOutlineDesktop } from "react-icons/ai";
import { IoWomanSharp, IoClose } from "react-icons/io5";
import { FaMale, FaBabyCarriage, FaUmbrellaBeach, FaStoreAlt, FaTools ,FaHome } from "react-icons/fa";
import { GiConverseShoe } from "react-icons/gi";
import { RiMentalHealthLine } from "react-icons/ri";
import { IoIosBed } from "react-icons/io";
import { TbChristmasBall, TbGardenCart } from "react-icons/tb";
import { MdSportsSoccer, MdChildCare, MdOutlinePets } from "react-icons/md";
import { PiCookingPotFill } from "react-icons/pi";
import { BsBoxSeamFill } from "react-icons/bs";
import OfertasUnicas from './SubCategorias/OfertaUnica/OfertasUnicas';
import Tecnologia from './SubCategorias/Tecnologia/Tecnologia';
import ElectroHogar from './SubCategorias/ElectroHogar/ElectoHogar';
import Muebles_Organizacion from './SubCategorias/Muebles y Organizacion/Muebles_Organizacion';
import Dormitorio from './SubCategorias/Dormitorio/Dormitorio';
import Mujer from './SubCategorias/Mujer/Mujer';
import Hombre from './SubCategorias/Hombre/Hombre';
import Calzado from './SubCategorias/Calzado/Calzado';
import AccesoriosModa from './SubCategorias/AccesoriosModa/AccesoriosModa';
import BellezaSalud from './SubCategorias/BellezaSalud/BellezaSalud';
import NiñosyJuguetes from './SubCategorias/NiñosyJuguetes/NiñosyJuguetes';
import Bebes from './SubCategorias/Bebes/Bebes';
import DeportesyAireLibre from './SubCategorias/DeportesyAireLibre/DeportesyAireLibre';
import CocinayMenaje from './SubCategorias/CocinayMenaje/CocinayMenaje';
import DecoracionyyIluminacion from './SubCategorias/DecoraciónIluminación/DecoracionyyIluminacion';
import Navidad from './SubCategorias/Navidad/Navidad';
import Playa from './SubCategorias/Playa/Playa';
import JardinTerraza from './SubCategorias/JardinyTerraza/JardinTerraza';
import Mascotas from './SubCategorias/Mascotas/Mascotas';
import SupermercadosyGourmet from './SubCategorias/Supermercados/SupermercadosyGourmet';
import BañoyCocina from './SubCategorias/BañoyCocina/BañoyCocina';
import HerramientasyConstruccion from './SubCategorias/HerramientasyConstrucción/HerramientasyConstruccion';
import Automotriz from './SubCategorias/Automotriz/Automotriz';
import OtrasCategorias from './SubCategorias/OtrasCategorias/OtrasCategorias';


interface SidebarProps {
  onClose: () => void;
  className?: string;
}

const Categorias = [
  { name: "Grandes Ofertas", icon: <BiSolidOffer size={25} /> },
  { name: "Tecnología", icon: <AiOutlineDesktop size={25} /> },
  { name: "Electrohogar", icon: <FaHome size={25} /> },
  { name: "Muebles y Organización", icon: <BsBoxSeamFill size={25} /> },
  { name: "Dormitorio", icon: <IoIosBed size={25} /> },
  { name: "Mujer", icon: <IoWomanSharp size={25} /> },
  { name: "Hombre", icon: <FaMale size={25} /> },
  { name: "Calzado", icon: <GiConverseShoe size={25} /> },
  { name: "Accesorios Moda", icon: <AiOutlineDesktop size={25} /> },
  { name: "Belleza y Salud", icon: <RiMentalHealthLine size={25} /> },
  { name: "Niños y Juguetes", icon: <MdChildCare size={25} /> },
  { name: "Bebés", icon: <FaBabyCarriage size={25} /> },
  { name: "Deportes y Aire Libre", icon: <MdSportsSoccer size={25} /> },
  { name: "Cocina y Menaje", icon: <PiCookingPotFill size={25} /> },
  { name: "Decoración e Iluminación", icon: <AiOutlineDesktop size={25} /> },
  { name: "Navidad", icon: <TbChristmasBall size={25} /> },
  { name: "Playa", icon: <FaUmbrellaBeach size={25} /> },
  { name: "Jardín y Terraza", icon: <TbGardenCart size={25} /> },
  { name: "Mascotas", icon: <MdOutlinePets size={25} /> },
  { name: "Supermercado y Gourmet", icon: <FaStoreAlt size={25} /> },
  { name: "Baño y Cocina", icon: <AiOutlineDesktop size={25} /> },
  { name: "Herramientas y Construcción", icon: <FaTools size={25} /> },
  { name: "Automotriz", icon: <AiOutlineDesktop size={25} /> },
  { name: "Otras Categorías", icon: <AiOutlineDesktop size={25} /> },
];

const Sidebar = ({ onClose }: SidebarProps) => {
  const [visibleCategory, setVisibleCategory] = useState<string | null>(null);

  return (
    <div className="pt-0 space-y-[80px] w-[380px] bg-white text-white">
      <div className="fixed w-[380px] top-0 left-0 flex items-center justify-between bg-white px-4 py-2 shadow-md z-50 pl-[30px] h-[80px]">
        <h2 className="text-[#040404] font-bold">Bienvenido</h2>
        <IoClose
          className="text-black hover:text-gray-300 cursor-pointer transition-all duration-300 p-1 rounded"
          size={24}
          onClick={onClose}
        />
      </div>

      <div className="w-full h-[calc(100vh-70px)] overflow-y-scroll mt-[60px] overflow-x-auto">
        {Categorias.map((category, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setVisibleCategory(category.name)}
            onMouseLeave={() => setVisibleCategory(null)}
          >
            <div className="flex items-center space-x-10 px-8 h-[60px] hover:bg-gray-700 hover:rounded-xl group transition-all duration-500">
              <h2 className="text-black font-thin w-[270px] flex group-hover:text-white group-hover:font-bold transition-all duration-500">
                {category.name}
                <span className="ml-auto">{category.icon}</span>
              </h2>
              <SlArrowRight className="text-black group-hover:text-white transition-all duration-300" />
            </div>


            {category.name === "Grandes Ofertas" && (
              <div
                className={`fixed w-[900px] h-[900px] top-[80px] bg-white text-white p-4 transition-all duration-300 transform rounded-tr-lg ${visibleCategory === "Grandes Ofertas" ? "translate-x-[380px]" : "-translate-x-full"
                  }`}
                style={{ zIndex: -1 }}
              >
                <OfertasUnicas />
              </div>
            )}

            {category.name === "Tecnología" && (
              <div
                className={`fixed w-[900px] h-[900px] top-[80px] bg-white text-white p-4 transition-all duration-300 transform rounded-tr-lg ${visibleCategory === "Tecnología" ? "translate-x-[380px]" : "-translate-x-full"
                  }`}
                style={{ zIndex: -1 }}
              >
                <Tecnologia/>
              </div>
            )}
            {category.name === "Electrohogar" && (
              <div
                className={`fixed w-[900px] h-[900px] top-[80px] bg-white text-white p-4 transition-all duration-300 transform rounded-tr-lg ${visibleCategory === "Electrohogar" ? "translate-x-[380px]" : "-translate-x-full"
                  }`}
                style={{ zIndex: -1 }}
              >
                <ElectroHogar />
              </div>
            )}
            {category.name === "Muebles y Organización" && (
              <div
                className={`fixed w-[900px] h-[900px] top-[80px] bg-white text-white p-4 transition-all duration-300 transform rounded-tr-lg ${visibleCategory === "Muebles y Organización" ? "translate-x-[380px]" : "-translate-x-full"
                  }`}
                style={{ zIndex: -1 }}
              >
                <Muebles_Organizacion />
              </div>
            )}
            {category.name === "Dormitorio" && (
              <div
                className={`fixed w-[900px] h-[900px] top-[80px] bg-white text-white p-4 transition-all duration-300 transform rounded-tr-lg ${visibleCategory === "Dormitorio" ? "translate-x-[380px]" : "-translate-x-full"
                  }`}
                style={{ zIndex: -1 }}
              >
                <Dormitorio />
              </div>
            )}

            {category.name === "Mujer" && (
              <div
                className={`fixed w-[900px] h-[900px] top-[80px] bg-white text-white p-4 transition-all duration-300 transform rounded-tr-lg ${visibleCategory === "Mujer" ? "translate-x-[380px]" : "-translate-x-full"
                  }`}
                style={{ zIndex: -1 }}
              >
                <Mujer />
              </div>
            )}

            {category.name === "Hombre" && (
              <div
                className={`fixed w-[900px] h-[900px] top-[80px] bg-white text-white p-4 transition-all duration-300 transform rounded-tr-lg ${visibleCategory === "Hombre" ? "translate-x-[380px]" : "-translate-x-full"
                  }`}
                style={{ zIndex: -1 }}
              >
                <Hombre />
              </div>
            )}

            {category.name === "Calzado" && (
              <div
                className={`fixed w-[900px] h-[900px] top-[80px] bg-white text-white p-4 transition-all duration-300 transform rounded-tr-lg ${visibleCategory === "Calzado" ? "translate-x-[380px]" : "-translate-x-full"
                  }`}
                style={{ zIndex: -1 }}
              >
                <Calzado />
              </div>
            )}

            {category.name === "Accesorios Moda" && (
              <div
                className={`fixed w-[900px] h-[900px] top-[80px] bg-white text-white p-4 transition-all duration-300 transform rounded-tr-lg ${visibleCategory === "Accesorios Moda" ? "translate-x-[380px]" : "-translate-x-full"
                  }`}
                style={{ zIndex: -1 }}
              >
                <AccesoriosModa />
              </div>
            )}

            {category.name === "Belleza y Salud" && (
              <div
                className={`fixed w-[900px] h-[900px] top-[80px] bg-white text-white p-4 transition-all duration-300 transform rounded-tr-lg ${visibleCategory === "Belleza y Salud" ? "translate-x-[380px]" : "-translate-x-full"
                  }`}
                style={{ zIndex: -1 }}
              >
                <BellezaSalud />
              </div>
            )}

            {category.name === "Niños y Juguetes" && (
              <div
                className={`fixed w-[900px] h-[900px] top-[80px] bg-white text-white p-4 transition-all duration-300 transform rounded-tr-lg ${visibleCategory === "Niños y Juguetes" ? "translate-x-[380px]" : "-translate-x-full"
                  }`}
                style={{ zIndex: -1 }}
              >
                <NiñosyJuguetes />
              </div>
            )}

            {category.name === "Bebés" && (
              <div
                className={`fixed w-[900px] h-[900px] top-[80px] bg-white text-white p-4 transition-all duration-300 transform rounded-tr-lg ${visibleCategory === "Bebés" ? "translate-x-[380px]" : "-translate-x-full"
                  }`}
                style={{ zIndex: -1 }}
              >
                <Bebes />
              </div>
            )}

            {category.name === "Deportes y Aire Libre" && (
              <div
                className={`fixed w-[900px] h-[900px] top-[80px] bg-white text-white p-4 transition-all duration-300 transform rounded-tr-lg ${visibleCategory === "Deportes y Aire Libre" ? "translate-x-[380px]" : "-translate-x-full"
                  }`}
                style={{ zIndex: -1 }}
              >
                <DeportesyAireLibre />
              </div>
            )}

            {category.name === "Cocina y Menaje" && (
              <div
                className={`fixed w-[900px] h-[900px] top-[80px] bg-white text-white p-4 transition-all duration-300 transform rounded-tr-lg ${visibleCategory === "Cocina y Menaje" ? "translate-x-[380px]" : "-translate-x-full"
                  }`}
                style={{ zIndex: -1 }}
              >
                <CocinayMenaje />
              </div>
            )}

            {category.name === "Decoración e Iluminación" && (
              <div
                className={`fixed w-[900px] h-[900px] top-[80px] bg-white text-white p-4 transition-all duration-300 transform rounded-tr-lg ${visibleCategory === "Decoración e Iluminación" ? "translate-x-[380px]" : "-translate-x-full"
                  }`}
                style={{ zIndex: -1 }}
              >
                <DecoracionyyIluminacion />
              </div>
            )}

            {category.name === "Navidad" && (
              <div
                className={`fixed w-[900px] h-[900px] top-[80px] bg-white text-white p-4 transition-all duration-300 transform rounded-tr-lg ${visibleCategory === "Navidad" ? "translate-x-[380px]" : "-translate-x-full"
                  }`}
                style={{ zIndex: -1 }}
              >
                <Navidad/>
              </div>
            )}

            {category.name === "Playa" && (
              <div
                className={`fixed w-[900px] h-[900px] top-[80px] bg-white text-white p-4 transition-all duration-300 transform rounded-tr-lg ${visibleCategory === "Playa" ? "translate-x-[380px]" : "-translate-x-full"
                  }`}
                style={{ zIndex: -1 }}
              >
                <Playa />
              </div>
            )}

            {category.name === "Jardín y Terraza" && (
              <div
                className={`fixed w-[900px] h-[900px] top-[80px] bg-white text-white p-4 transition-all duration-300 transform rounded-tr-lg ${visibleCategory === "Jardín y Terraza" ? "translate-x-[380px]" : "-translate-x-full"
                  }`}
                style={{ zIndex: -1 }}
              >
                <JardinTerraza />
              </div>
            )}

            {category.name === "Mascotas" && (
              <div
                className={`fixed w-[900px] h-[900px] top-[80px] bg-white text-white p-4 transition-all duration-300 transform rounded-tr-lg ${visibleCategory === "Mascotas" ? "translate-x-[380px]" : "-translate-x-full"
                  }`}
                style={{ zIndex: -1 }}
              >
                <Mascotas/>
              </div>
            )}

            {category.name === "Supermercado y Gourmet" && (
              <div
                className={`fixed w-[900px] h-[900px] top-[80px] bg-white text-white p-4 transition-all duration-300 transform rounded-tr-lg ${visibleCategory === "Supermercado y Gourmet" ? "translate-x-[380px]" : "-translate-x-full"
                  }`}
                style={{ zIndex: -1 }}
              >
                <SupermercadosyGourmet />
              </div>
            )}

            {category.name === "Baño y Cocina" && (
              <div
                className={`fixed w-[900px] h-[900px] top-[80px] bg-white text-white p-4 transition-all duration-300 transform rounded-tr-lg ${visibleCategory === "Baño y Cocina" ? "translate-x-[380px]" : "-translate-x-full"
                  }`}
                style={{ zIndex: -1 }}
              >
                <BañoyCocina/>
              </div>
            )}

            {category.name === "Herramientas y Construcción" && (
              <div
                className={`fixed w-[900px] h-[900px] top-[80px] bg-white text-white p-4 transition-all duration-300 transform rounded-tr-lg ${visibleCategory === "Herramientas y Construcción" ? "translate-x-[380px]" : "-translate-x-full"
                  }`}
                style={{ zIndex: -1 }}
              >
                <HerramientasyConstruccion/>
              </div>
            )}

            {category.name === "Automotriz" && (
              <div
                className={`fixed w-[900px] h-[900px] top-[80px] bg-white text-white p-4 transition-all duration-300 transform rounded-tr-lg ${visibleCategory === "Automotriz" ? "translate-x-[380px]" : "-translate-x-full"
                  }`}
                style={{ zIndex: -1 }}
              >
                <Automotriz/>
              </div>
            )}

            {category.name === "Otras Categorías" && (
              <div
                className={`fixed w-[900px] h-[900px] top-[80px] bg-white text-white p-4 transition-all duration-300 transform rounded-tr-lg ${visibleCategory === "Otras Categorías" ? "translate-x-[380px]" : "-translate-x-full"
                  }`}
                style={{ zIndex: -1 }}
              >
                <OtrasCategorias />
              </div>
            )}

         
          </div>
        ))}
       <div className=" w-[380px] flex items-center justify-between bg-gradient-to-r from-cyan-500 to-[#a0e1f3] px-4 py-2 shadow-md pl-[30px] h-[80px] mb-auto border-3">
        <h2 className="text-[#040404] font-bold">E-commerce</h2>
       
      </div>
      </div>
      

    </div>
  );
};

export default Sidebar;
