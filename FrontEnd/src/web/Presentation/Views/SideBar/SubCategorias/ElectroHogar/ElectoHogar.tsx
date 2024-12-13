import { Button } from "@nextui-org/react";
import { FaChevronRight } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";

function ElectroHogar() {
  return (
    <div className="space-y-4 ">
      <div className="bg-gradient-to-r from-cyan-500 to-[#a0e1f3] rounded-tr-3xl flex items-center h-[50px] pl-[20px] space-x-4 shadow-xl">
        <IoIosBed size={35} />
        <h1 className="text-[25px] w-[300px]">ElectroHogar</h1>
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
              Refrigeradores
              <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
            </h1>
            <ul className="space-y-2 text-[14px]">
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Side by Side
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Bottom freezer
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Top mount
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>

              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Congeladores
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Frigobares
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Cavas
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Linea Industrial
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>

            </ul>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
              Lavado y planchado
              <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
            </h1>
            <ul className="space-y-2 text-[14px]">
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Lavadoras
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Lavasecas
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Secadoras
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>

              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Centro de lavado
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Lavavajillas
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Planchado
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
                Cocina
                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
              </h1>
              <ul className="space-y-2 text-[14px]">
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Cocinas a gas
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Cocinas Eléctricas
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Campanas
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Encimeras
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Hornos empotrables
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Combos empotrables
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
                Climatización
                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
              </h1>
              <ul className="space-y-2 text-[14px]">
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Ventiladores
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Aire Acondicionado portatil
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Aire Acondicionado split
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Enfriadores
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Termas
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Estufas
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Deshumedecedores
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Purificadores de Aire
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Calientacamas
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
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
                Electrodomésticos Cocina 
              
              <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
              </h1>

              <ul className="space-y-2 text-[14px]">
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Licuadoras
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Microondas
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Freidoras de aire
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Ollas Arroceras y Multiusos
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Extractores y Exprimidores
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Cafeteras
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Batidoras
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Hervidores
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Sandwicheras y Wafleras
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Hornos eléctricos
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Grills y parrillas electricas
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Cocina divertida
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Tostadoras
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Combos Electrodomesticos
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
              </ul>
            </div>



          </div>

        </div>
        <div className="w-[25%] space-y-7">
          <div className="space-y-2">
            <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
              Aspirado y Limpieza
              <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
            </h1>
            <ul className="space-y-2 text-[14px]">
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Aspiradoras de Arrastre
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Aspiradoras Verticales
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Aspiradoras de Portatiles
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>

              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Lustradoras
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Limpiadores a Vapor
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>


            </ul>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
              Electro Belleza
              <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
            </h1>
            <ul className="space-y-2 text-[14px]">
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Secadores de cabello
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Aspiradores de Cabello
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Onduladores de cabello
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>

              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Afeitadoras
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
  );
}

export default ElectroHogar;
