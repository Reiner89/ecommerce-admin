import { Button } from "@nextui-org/react";
import { FaChevronRight } from "react-icons/fa";
import { GiConverseShoe } from 'react-icons/gi';

const Calzado = () => {
  return (
    <div className="space-y-4 ">
        <div className="bg-gradient-to-r from-cyan-500 to-[#a0e1f3] rounded-tr-3xl flex items-center h-[50px] pl-[20px] space-x-4 shadow-xl">
            <GiConverseShoe size={35} />
            <h1 className="text-[25px] w-[300px]">Calzado</h1>
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
                        Tendencias
                        <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                    </h1>
                    <ul className="space-y-2 text-[14px]">
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                              Snaker Corner
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                White Shoes
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Zapatillas Deportivas
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>

                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Zapatillas XL
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                     
                       

                    </ul>
                </div>
                <div className="space-y-2">
                    <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
                        Mujer
                        <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                    </h1>
                    <ul className="space-y-2 text-[14px]">
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Zapatillas Urbanas
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                            Zapatillas deportivas
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Zapatillas Casuales
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>

                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                               Zapatos casuales
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                     
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                               Zapatos de vestir
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>

                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                               Botas
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                       
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                               Botines
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>

                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                               Mocasines
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                               Sandalias
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
                            Hombre
                            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                        </h1>
                        <ul className="space-y-2 text-[14px]">
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Zapatillas Urbanas
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                            Zapatillas deportivas
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Zapatillas Casuales
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>

                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                               Botas y botines
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                     
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                               Zapatos Formal                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>

                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                               Botas
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                       
                       

                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                               Mocasines
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                               Sandalias
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                               Zapatillas Outdoor
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                            Zapatillas Running
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
                            Zapatos Niña
                            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                        </h1>
                        <ul className="space-y-2 text-[14px]">
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Zapatillas niña 
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Zapatos niña
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                  Sandalias niña
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                   Botas niña
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
                           Zapatos niño
                            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                        </h1>
                        <ul className="space-y-2 text-[14px]">
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Zapatillas niño 
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Zapatos niño
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                  Sandalias niño
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                   Botas niño
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
                            Marcas zapatillas
                            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                        </h1>
                        <ul className="space-y-2 text-[14px]">
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Adidas
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Puma
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Reebok
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                   Nike
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Converse
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Skechers
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                           
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Vans
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>

                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                New balance
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>

                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Diadora
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>

                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Aslcs
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
                       Marcas destacadas
                        <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                    </h1>
                    <ul className="space-y-2 text-[14px]">
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Marcas de la A a la Z
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                American Abbey
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Apology
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>

                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Basement
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Cortefiel
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Denimlab
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Doo Australia
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                DKNY
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Mango
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

export default Calzado