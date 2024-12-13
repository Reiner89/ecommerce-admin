import { Button } from "@nextui-org/react";
import { FaChevronRight } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa";

const Playa = () => {
  return (
    <div className="space-y-4 ">
        <div className="bg-gradient-to-r from-cyan-500 to-[#a0e1f3] rounded-tr-3xl flex items-center h-[50px] pl-[20px] space-x-4 shadow-xl">
            <FaUmbrellaBeach size={35} />
            <h1 className="text-[25px] w-[300px]">Playa</h1>
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
                        Tendencias y 
                        <h1>Colecciones</h1>
                        <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                    </h1>
                    <ul className="space-y-2 text-[14px]">
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Nuevos Ingresos
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Mundo Lino
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Polos con Cuello
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>

                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Lino Collection
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>
                     
                       

                    </ul>
                </div>
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
                                Zapatos hombre
                            </span>
                            <FaChevronRight
                                className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                            />
                        </li>

                        <li className="group relative flex items-center">
                            <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                               Pantuflas hombre
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
                            Ropa
                            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                        </h1>
                        <ul className="space-y-2 text-[14px]">
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Polos
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                  Camisas 
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Poleras
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Chompas y Chalecos
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Poleras
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Jeans
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Pantalones
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>

                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Shorts
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Ropas de Baño
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
                            Cuidado Personal
                            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                        </h1>
                        <ul className="space-y-2 text-[14px]">
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Barbería 
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Recortadoras
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Maquinas de afeitar
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                   Perfumes hombre
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Vitaminas y suplementos
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
                           Accesorios
                            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                        </h1>
                        <ul className="space-y-2 text-[14px]">
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                  Gorros y Sombreros
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
                                    Relojes
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
                                    Billeteras y Monederos
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

                <div className="space-y-2">
                    <div className="space-y-2">
                        <h1 className="font-bold text-[17px] relative group hover:text-blue-500 ">
                            Mundo Surf
                            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                        </h1>
                        <ul className="space-y-2 text-[14px]">
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Billabong
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
                                    Huntington
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Rip curl
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Volcomo
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Hurley
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
                           Ropa interior y
                           <h1>Pijamas </h1>
                            <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full "></span>
                        </h1>
                        <ul className="space-y-2 text-[14px]">
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Boxer y Calzoncillos
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Medias
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Pijamas y Camisetas
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                    Rip curl
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Volcomo
                                </span>
                                <FaChevronRight
                                    className="absolute left-[-20px] opacity-0 transition-all duration-300 group-hover:left-0 group-hover:opacity-100 text-blue-500"
                                />
                            </li>
                            <li className="group relative flex items-center">
                                <span className="transition-all duration-300 group-hover:ml-4 hover:font-semibold">
                                Hurley
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

export default Playa