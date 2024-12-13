
import { Button } from "@nextui-org/react";
import { FaChevronRight } from "react-icons/fa";

import { AiOutlineDesktop } from "react-icons/ai";

const AccesoriosModa = () => {
  return (
    <div className="space-y-4 ">
        <div className="bg-gradient-to-r from-cyan-500 to-[#a0e1f3] rounded-tr-3xl flex items-center h-[50px] pl-[20px] space-x-4 shadow-xl">
            <AiOutlineDesktop size={35} />
            <h1 className="text-[25px] w-[300px]">Accesorios y Moda</h1>
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
                        Carteras y bolsos
                        <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                    </h1>
                    <ul className="space-y-2 text-[14px]">
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                              Carteras
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Crossbody
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Mochilas
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>

                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Totes
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>

                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Neceseres
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                     
                       
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Billeteras
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
                            Relojes
                            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                        </h1>
                        <ul className="space-y-2 text-[14px]">
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Relojes hombre
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                            Relojes mujer
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                            Relojes de lujo
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
                            Lentes
                            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                        </h1>
                        <ul className="space-y-2 text-[14px]">
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Lentes hombre
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Lentes mujer
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
                            Joya y Bisutería
                            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                        </h1>
                        <ul className="space-y-2 text-[14px]">
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                  Anillos 
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Aretes
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                  Collares
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                  Pulseras
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
                <div className="space-y-4">
                    <div className="space-y-2">
                    <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
                           Otros Accesorios
                            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                        </h1>
                        <ul className="space-y-2 text-[14px]">
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Gooras y Sombreros 
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Correas y cinturones
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                  Pañuelos y Accesorios de pelo
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                   Otros accesorios
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
                            Maletas
                            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                        </h1>
                        <ul className="space-y-2 text-[14px]">
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Carry on
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Maletas medianas
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Maletas grandes
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
                            Accesorios Hombre
                            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                        </h1>
                        <ul className="space-y-2 text-[14px]">
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Relojes
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                              Lentes
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Billeteras y monederos
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Mochilas
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>

                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                  Joyeria
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>

                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                  Gorros y sombreros
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>

                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                  Correas y cinturones
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
                    
                </div>
            




            </div>
            
        </div>
    </div>
);
}

export default AccesoriosModa