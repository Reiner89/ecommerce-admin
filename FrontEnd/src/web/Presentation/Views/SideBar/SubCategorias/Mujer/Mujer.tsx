import { Button } from "@nextui-org/react";
import { FaChevronRight } from "react-icons/fa";

import { IoWomanSharp } from "react-icons/io5";

const Mujer = () => {
  return (
    <div className="space-y-4 ">
      <div className="bg-gradient-to-r from-cyan-500 to-[#a0e1f3] rounded-tr-3xl flex items-center h-[50px] pl-[20px] space-x-4 shadow-xl">
        <IoWomanSharp size={35} />
        <h1 className="text-[25px] w-[300px]">Mujer</h1>
        <div className="ml-auto text-white relative left-[38%]">
          <Button color="primary" variant="bordered" className="text-white">
            Ver Todo
          </Button>
        </div>
      </div>

      <div className="text-black flex  overflow-y-scroll space-x-10">
        <div className="w-[25%] space-y-7">
          <div className="space-y-2">
            <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
              Tendencias y Colecciones
              <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
            </h1>
            <ul className="space-y-2 text-[14px]">
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Lo ultimo en moda
                </span>
                <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Naturales
                </span>
                <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Special Price
                </span>
                <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
              </li>

              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Lino Collection
                </span>
                <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Anis x Falabella
                </span>
                <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
              </li>

              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Roperos con Espejo
                </span>
                <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[25%] space-y-7">
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
                Ropa
                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
              </h1>
              <ul className="space-y-2 text-[14px]">
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Polos
                  </span>
                  <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Blusas
                  </span>
                  <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Chompas
                  </span>
                  <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Casacas
                  </span>
                  <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Poleras
                  </span>
                  <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Jeans
                  </span>
                  <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Pantalones
                  </span>
                  <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Vestidos y Enterizos
                  </span>
                  <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Faldas
                  </span>
                  <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-2">
            <div className="space-y-2">
              <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
                Accesorios
                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
              </h1>
              <ul className="space-y-2 text-[14px]">
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Carteras y Bolsos
                  </span>
                  <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Relojes
                  </span>
                  <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Joyas y bisutería
                  </span>
                  <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Lentes
                  </span>
                  <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Billeteras y Monederos
                  </span>
                  <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Correas y cinturones
                  </span>
                  <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-2">
            <div className="space-y-2"></div>
          </div>
        </div>
        <div className="w-[25%] space-y-7">
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
                Ropa interior y pijamas
                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
              </h1>
              <ul className="space-y-2 text-[14px]">
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Arma tu pijama
                  </span>
                  <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Pijamas
                  </span>
                  <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Lencería
                  </span>
                  <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Sostenes
                  </span>
                  <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Calzones
                  </span>
                  <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Medias
                  </span>
                  <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Panties
                  </span>
                  <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-2">
            <div className="space-y-2">
              <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
                Zapatos
                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
              </h1>
              <ul className="space-y-2 text-[14px]">
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Zapatillas Urbanas
                  </span>
                  <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Zapatillas Deportivas
                  </span>
                  <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Botas y botines
                  </span>
                  <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Mocasines
                  </span>
                  <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Zapatos Casuales
                  </span>
                  <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Zapatos de vestir
                  </span>
                  <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Sandalias
                  </span>
                  <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-[25%] space-y-7">
          <div className="space-y-2">
            <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
              Marcas destacadas
              <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
            </h1>
            <ul className="space-y-2 text-[14px]">
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Marcas de la A a la Z
                </span>
                <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  American Abbey
                </span>
                <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Apology
                </span>
                <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
              </li>

              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Basement
                </span>
                <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Cortefiel
                </span>
                <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Denimlab
                </span>
                <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Doo Australia
                </span>
                <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  DKNY
                </span>
                <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Mango
                </span>
                <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Mango Teen
                </span>
                <FaChevronRight className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mujer;
