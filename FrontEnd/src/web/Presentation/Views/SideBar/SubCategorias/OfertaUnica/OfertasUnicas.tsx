import { BiSolidOffer } from "react-icons/bi";
import { Button } from "@nextui-org/react";
import { FaChevronRight } from "react-icons/fa";
function OfertasUnicas() {
  return (
    <div className="space-y-4 ">
      <div className="bg-gradient-to-r from-cyan-500 to-[#a0e1f3] rounded-tr-3xl flex items-center h-[50px] pl-[20px] space-x-4 shadow-xl">
        <BiSolidOffer size={35} />
        <h1 className="text-[25px]">Ofertas Únicas</h1>
        <div className="ml-auto text-white relative left-[58%]">
          <Button color="primary" variant="bordered" className="text-white">
            Ver Todo
          </Button>
        </div>
      </div>

      <div className="text-black flex  overflow-y-scroll space-x-10">
        <div className="w-[25%] space-y-7">
          <div className="space-y-2">
            <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
              Electrohogar
              <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
            </h1>
            <ul className="space-y-2 text-[14px]">
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Refrigeración
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Lavado
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Cocina
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>

              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Climatización
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Electrodomésticos
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>

            </ul>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
              Tecnología
              <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
            </h1>
            <ul className="space-y-2 text-[14px]">
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Celulares
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Tv
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Cómputo
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>

              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Mundo Gamer
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Smartwatches
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Videojuegos
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>

            </ul>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
              Deportes
              <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
            </h1>
            <ul className="space-y-2 text-[14px]">
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Camping y Outdoor
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Fitness
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Bicicletas
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>

              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Otros Deportes
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Accesorios Deportivos
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Electromovilidad
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>

            </ul>
          </div>



        </div>
        <div className="w-[25%] space-y-7">
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
                Hogar
                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
              </h1>
              <ul className="space-y-2 text-[14px]">
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Muebles y Decoración
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Cocina y Menaje
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Dormitorio
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Ropa de Cama
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="space-y-2">
              <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
                Moda y Accesorios
                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
              </h1>
              <ul className="space-y-2 text-[14px]">
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Vestuario Mujer
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Vestuario Hombre
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Infantil
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Calzado
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Accesorios
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>

                
              </ul>
            </div>
          </div>
          <div className="space-y-2">
            <div className="space-y-2">
              <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
                Otros Accesorios
                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
              </h1>
              <ul className="space-y-2 text-[14px]">
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Belleza y Cuidado Personal
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Instrumentos Musicales
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Mascotas
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Librería y Manualidades
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-2">
            <div className="space-y-2">
              <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
                Supermercado y Gourmet
                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
              </h1>
              <ul className="space-y-2 text-[14px]">
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Bebidas y Licores
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Alimentos y Gourmet 
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Aseo y Limpieza
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
               
              </ul>
            </div>
          </div>

        </div>
        <div className="w-[25%] space-y-2">
        <div className="space-y-2">
            <div className="space-y-2">
              <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
                Mejoramiento del hogar
                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
              </h1>
              <ul className="space-y-2 text-[14px]">
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Jardin y Terraza
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Construcción y Ferreteria 
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Cocina 
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Baño 
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfertasUnicas;
