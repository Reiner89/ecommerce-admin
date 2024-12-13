
import { Button } from "@nextui-org/react";
import { AiOutlineDesktop } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
function Tecnologia() {
  return (
    <div className="space-y-4 ">
      <div className="bg-gradient-to-r from-cyan-500 to-[#a0e1f3] rounded-tr-3xl flex items-center h-[50px] pl-[20px] space-x-4 shadow-xl">
        <AiOutlineDesktop size={35} />
        <h1 className="text-[25px] w-[300px]">Tecnologia</h1>
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
              Celulares
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
                  Apple
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Samsung
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>

              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Xiaomi
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Motorola
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Honor
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Accesorios y Cases
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>

            </ul>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
              Tv
              <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
            </h1>
            <ul className="space-y-2 text-[14px]">
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Televisores
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Lg
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Samsung
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>

              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  JVC
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  TCL
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
        <div className="w-[25%] space-y-7">
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
                Computo
                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
              </h1>
              <ul className="space-y-2 text-[14px]">
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Laptops
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Tablets
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Impresoras y Tintas
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Computadores de Escritorio
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Computadores de Escritorio
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Monitores
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
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Almacenamiento
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Software
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
                Audio
                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
              </h1>
              <ul className="space-y-2 text-[14px]">
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Audifonos 
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Equipos de Sonido
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Parlantes
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Soundbar y Home Theater
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
         

        

        </div>
        <div className="w-[25%] space-y-2">
        <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
                Mundo Gamer
                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
              </h1>
              <ul className="space-y-2 text-[14px]">
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Laptops Gamer
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Sillas Gamer 
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Monitores Gamer 
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Computadoras Gamer 
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Audifonos Gamer 
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Teclados Gamer 
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
            <div className="space-y-2">
              <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
                Camaras y Drones
                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
              </h1>
              <ul className="space-y-2 text-[14px]">
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Camaras Profesionales
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Camaras deportivas 
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Camaras Instantaneas 
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Drones 
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
            <div className="space-y-2">
              <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
                Smartwatches
                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
              </h1>
              <ul className="space-y-2 text-[14px]">
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Apple
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Samsung 
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Xiaomi 
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Huawei 
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
              Videojuegos
              <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
            </h1>
            <ul className="space-y-2 text-[14px]">
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Lanzamientos
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Consolas
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  PlayStation
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>

              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Nintendo
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Xbox
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Xbox
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
          <div className="space-y-2">
            <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
              Smarthome y domótica
              <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
            </h1>
            <ul className="space-y-2 text-[14px]">
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Asistentes de voz
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Iluminación inteligente
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Proyectores
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>

              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Camaras de seguridad
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Aspiradoras robot
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Reproductores Streaming
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

export default Tecnologia;
