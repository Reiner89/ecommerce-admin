import { Button } from "@nextui-org/react";
import { FaChevronRight } from "react-icons/fa";
import { BsBoxSeamFill } from "react-icons/bs";
function Muebles_Organizacion() {
    return (
        <div className="space-y-4 ">
            <div className="bg-gradient-to-r from-cyan-500 to-[#a0e1f3] rounded-tr-3xl flex items-center h-[50px] pl-[20px] space-x-4 shadow-xl">
                <BsBoxSeamFill size={35} />
                <h1 className="text-[25px] w-[300px]">Muebles y Organización</h1>
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
                            Muebles
                            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                        </h1>
                        <ul className="space-y-2 text-[14px]">
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Sofás y Sillones
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Sofás Reclinables
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Sofá Camas y Futones
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
                                    Butacas
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Muebles de Tv y Racks
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Mesas de centro
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Juegos de Terraza
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
                                    Sillas de Comedor
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Muebles de cocina
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
                                    Roperos con Espejo
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
                                    Zapateras
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
                                    Sillas de Oficina
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Organizadores
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
                                Sala
                                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                            </h1>
                            <ul className="space-y-2 text-[14px]">
                                <li className="group relative flex items-center">
                                    <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                        Sófas y Sillones
                                    </span>
                                    <FaChevronRight
                                        className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                    />
                                </li>
                                <li className="group relative flex items-center">
                                    <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                        Sofás Seccionales
                                    </span>
                                    <FaChevronRight
                                        className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                    />
                                </li>
                                <li className="group relative flex items-center">
                                    <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                        Sofás Camas y Futones
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
                                        Sofás Reclinables
                                    </span>
                                    <FaChevronRight
                                        className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                    />
                                </li>
                                <li className="group relative flex items-center">
                                    <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                        Butacas
                                    </span>
                                    <FaChevronRight
                                        className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                    />
                                </li>
                                <li className="group relative flex items-center">
                                    <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                        Muebles de Tv y Racks
                                    </span>
                                    <FaChevronRight
                                        className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                    />
                                </li>
                                <li className="group relative flex items-center">
                                    <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                        Mesas de Centro y Auxiliares
                                    </span>
                                    <FaChevronRight
                                        className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                    />
                                </li>
                                <li className="group relative flex items-center">
                                    <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                        Estantes y Repisas
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
                                Comedor
                                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                            </h1>
                            <ul className="space-y-2 text-[14px]">
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
                                        Sillas de Comedor
                                    </span>
                                    <FaChevronRight
                                        className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                    />
                                </li>
                                <li className="group relative flex items-center">
                                    <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                        Mesas de Comedor
                                    </span>
                                    <FaChevronRight
                                        className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                    />
                                </li>
                                <li className="group relative flex items-center">
                                    <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                        Aparadores y Vitrinas
                                    </span>
                                    <FaChevronRight
                                        className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                    />
                                </li>
                                <li className="group relative flex items-center">
                                    <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                        Menajes de Comedor
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
                                Bar
                                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                            </h1>
                            <ul className="space-y-2 text-[14px]">
                                <li className="group relative flex items-center">
                                    <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                        Bancos y Sillas de Bar
                                    </span>
                                    <FaChevronRight
                                        className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                    />
                                </li>
                                <li className="group relative flex items-center">
                                    <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                        Muebles de Bar
                                    </span>
                                    <FaChevronRight
                                        className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                    />
                                </li>
                                <li className="group relative flex items-center">
                                    <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                        Menaje de Bar
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
                                Sala
                                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                            </h1>
                            <ul className="space-y-2 text-[14px]">
                                <li className="group relative flex items-center">
                                    <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                        Sófas y Sillones
                                    </span>
                                    <FaChevronRight
                                        className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                    />
                                </li>
                                <li className="group relative flex items-center">
                                    <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                        Sofás Seccionales
                                    </span>
                                    <FaChevronRight
                                        className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                    />
                                </li>
                                <li className="group relative flex items-center">
                                    <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                        Sofás Camas y Futones
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
                                        Sofás Reclinables
                                    </span>
                                    <FaChevronRight
                                        className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                    />
                                </li>
                                <li className="group relative flex items-center">
                                    <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                        Butacas
                                    </span>
                                    <FaChevronRight
                                        className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                    />
                                </li>
                                <li className="group relative flex items-center">
                                    <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                        Muebles de Tv y Racks
                                    </span>
                                    <FaChevronRight
                                        className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                    />
                                </li>
                                <li className="group relative flex items-center">
                                    <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                        Mesas de Centro y Auxiliares
                                    </span>
                                    <FaChevronRight
                                        className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                    />
                                </li>
                                <li className="group relative flex items-center">
                                    <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                        Estantes y Repisas
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
                                Comedor
                                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                            </h1>
                            <ul className="space-y-2 text-[14px]">
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
                                        Sillas de Comedor
                                    </span>
                                    <FaChevronRight
                                        className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                    />
                                </li>
                                <li className="group relative flex items-center">
                                    <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                        Mesas de Comedor
                                    </span>
                                    <FaChevronRight
                                        className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                    />
                                </li>
                                <li className="group relative flex items-center">
                                    <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                        Aparadores y Vitrinas
                                    </span>
                                    <FaChevronRight
                                        className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                    />
                                </li>
                                <li className="group relative flex items-center">
                                    <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                        Menajes de Comedor
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
                                Bar
                                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                            </h1>
                            <ul className="space-y-2 text-[14px]">
                                <li className="group relative flex items-center">
                                    <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                        Bancos y Sillas de Bar
                                    </span>
                                    <FaChevronRight
                                        className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                    />
                                </li>
                                <li className="group relative flex items-center">
                                    <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                        Muebles de Bar
                                    </span>
                                    <FaChevronRight
                                        className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                    />
                                </li>
                                <li className="group relative flex items-center">
                                    <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                        Menaje de Bar
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

export default Muebles_Organizacion;
