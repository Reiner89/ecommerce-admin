import { Button } from "@nextui-org/react";
import { FaChevronRight } from "react-icons/fa";
import { TbGardenCart } from "react-icons/tb";
function JardinTerraza() {
  return (
    <div className="space-y-4 ">
        <div className="bg-gradient-to-r from-cyan-500 to-[#a0e1f3] rounded-tr-3xl flex items-center h-[50px] pl-[20px] space-x-4 shadow-xl">
            <TbGardenCart size={35} />
            <h1 className="text-[25px] w-[300px]">Jardin y Terraza</h1>
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
                        Terrazas
                        <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                    </h1>
                    <ul className="space-y-2 text-[14px]">
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Muebles de Terraza
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Juegos de Sala
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                              Sofas y Sillones de Terraza
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>

                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Juegos de Comedor
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>

                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Mesa de terraza
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>

                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Sillas de terraza
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                     
                       

                    </ul>
                </div>
                <div className="space-y-2">
                    <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
                        Jardin
                        <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                    </h1>
                    <ul className="space-y-2 text-[14px]">
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Maceteros y accesorios
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                            Tierras , semillas y fertilizantes
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Riego de jardín
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>

                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                               Plantas y pasto
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                               Fuentes de agua
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>

                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                               Faroles y candelabros
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
                            Iluminación de 
                            <h1>exterior</h1>
                            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                        </h1>
                        <ul className="space-y-2 text-[14px]">
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Cintas y luces LED
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                  Reflectores LED 
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Iluminación de piso y muro
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Apliqués de piso y muro
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Apliques de pared exterior
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Faroles y antorchas
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Iluminación Solar
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
                            Mundo Piscina
                            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                        </h1>
                        <ul className="space-y-2 text-[14px]">
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Flotadores 
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Mantenimiento de piscinas
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Piscinas Estructurales
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                   Piscinas y jacuzzis inflables
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
                       
                    </div>

                </div>





            </div>
            <div className="w-[25%] space-y-7">
                <div className="space-y-4">
                    <div className="space-y-2">
                    <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
                           Juegos de Exterior
                            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                        </h1>
                        <ul className="space-y-2 text-[14px]">
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                  Autos a bateria
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Bicicletas infantiles
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Camas elásticas
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Casas y carpas de juegos 
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Infables
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Juegos deportivos
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>

                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Mesas multijuegos
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Resbalones y columpios
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>

                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Scooter , skate y patines
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>

                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Triciclos y correpasillos
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
                       Herramients y 
                       <h1>maquinarias de jardin</h1>
                        <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                    </h1>
                    <ul className="space-y-2 text-[14px]">
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                              Cortasetos y podadoras
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Cortadoras de pasto
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Herramientas de jardin
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>

                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Motosierras
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Orilladoras y motoguadaña
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Sopladores
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                             Palas , rastrillos y otros 
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Tijeras para jardin 
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Guantes y accesorios
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Mango Teen
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

export default JardinTerraza