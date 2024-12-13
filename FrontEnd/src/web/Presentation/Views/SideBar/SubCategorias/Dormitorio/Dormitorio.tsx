import { Button } from "@nextui-org/react";
import { FaChevronRight } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";

function Dormitorio() {
  return (
    <div className="space-y-4 ">
      <div className="bg-gradient-to-r from-cyan-500 to-[#a0e1f3] rounded-tr-3xl flex items-center h-[50px] pl-[20px] space-x-4 shadow-xl">
        <IoIosBed size={35} />
        <h1 className="text-[25px] w-[300px]">Dormitorio</h1>
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
              Camas
              <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
            </h1>
            <ul className="space-y-2 text-[14px]">
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  1 Plaza
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  1.5 Plazas
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  2 Plazas
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>

              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Queen
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  King
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              
             

            </ul>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
              Tipos de Cama
              <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
            </h1>
            <ul className="space-y-2 text-[14px]">
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Camas Plegables
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Camarotes
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Cama Boxet
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>

              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Cama Diván
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Tarimas y bases
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
            

            </ul>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
              Juegos de dormitorio
              <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
            </h1>
            <ul className="space-y-2 text-[14px]">
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  1.5 plazas
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  2 plazas
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Queen
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>

              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  King
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
                Colchones
                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
              </h1>
              <ul className="space-y-2 text-[14px]">
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    1 plaza
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    1.5 plazas
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    2 plazas
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Colchones de cuna
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                   Queen
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    King
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
                Ropa de cama
                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
              </h1>
              <ul className="space-y-2 text-[14px]">
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Sábanas 
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Cubrecamas y quilts
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Edredones y plumones
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Juegos de cama
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Frazadas y mantas
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Fundas de plumón
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Ropa de cama infantil
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Cojines y Pieceras
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Almohadas y fundas
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Protector de colchón
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
        <div className="space-y-7">
            <div className="space-y-2">
              <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
                Muebles y Dormitorio
             
                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
              </h1>
              <ul className="space-y-2 text-[14px]">
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Cabeceras
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Veladores 
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Cómodas y cajoneras 
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Organización 
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Roperos 
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Zapateras 
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Tocadores 
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                
             
              </ul>

            </div>

            <div className="space-y-2">
              <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
              Dormitorio de niños
              
                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
              </h1>
              <ul className="space-y-2 text-[14px]">
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Alfombras infantiles
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Camas infantiles 
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Cómodas y cambiadores 
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Cunas 
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Decoración infantil 
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Dormitorio bebé 
                  </span>
                  <FaChevronRight
                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                  />
                </li>
                <li className="group relative flex items-center">
                  <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                    Ropa de Cama infantil 
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
              Marcas Destacadas 
              <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
            </h1>
            <ul className="space-y-2 text-[14px]">
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Paraíso 
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                Rosen
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                Forli
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>

              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Drimer
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>
              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  El Cisne
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>

              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                  Drom
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>

              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                 Beatyrest Simmons
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>

              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                 Tecnodream
                </span>
                <FaChevronRight
                  className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                />
              </li>

              <li className="group relative flex items-center">
                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                 Roberta Allen
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

export default Dormitorio;
