import { useState } from "react";
import { Accordion, AccordionItem, Checkbox } from "@nextui-org/react";
import { Image } from "@nextui-org/image";
const CarritoComprasActivo = () => {
    const [cantidad, setCantidad] = useState(1);


    const aumentar = () => {
        setCantidad((prevCantidad) => prevCantidad + 1);
    };


    const disminuir = () => {
        setCantidad((prevCantidad) => (prevCantidad > 1 ? prevCantidad - 1 : 1));
    };

    return (
        <div className=" h-[700px] py-6 flex items-center justify-center bg-slate-300">
            <div className=" w-[80%] h-[600px] rounded-lg flex items-center px-10 space-x-9 ">

                <div className="w-[70%] h-[500px] rounded-lg">
                    <div className="flex px-5 flex-col space-y-6">
                        <div className="flex items-center space-x-5  pl-1">
                            <h1 className="text-[26px] font-semibold">Carrito</h1>
                            <h1 className="text-[16px]">(1 producto)</h1>
                        </div>
                        <div className="bg-[#fff] rounded-lg px-6">
                            <Accordion className=" border-b1" variant="light" >
                                <AccordionItem key="1" aria-label="Accordion 1" title="Vendido por Gucchi">
                                    <div className=" space-y-5">
                                        <div className=" border-t-1 border-b-1  h-[70px] pt-4 items-center justify-center">
                                            <Checkbox defaultSelected>Seleccionar Productos</Checkbox>
                                        </div>

                                        <div className="flex items-center space-x-5 ">
                                            <Checkbox defaultSelected></Checkbox>
                                            <Image
                                                width={100}
                                                height={100}
                                                alt="NextUI hero Image"
                                                src="https://nextui.org/images/hero-card-complete.jpeg"
                                            />
                                            <div>
                                                <h1 className=" font-bold">
                                                    Pinza Amperimétrica Digital Rms Real NVC UNI-T UT201+ Plus
                                                </h1>
                                                <h1>
                                                    UNI T
                                                </h1>
                                                <h1>Vendido por Tool Store Peru E.i.r.l.</h1>
                                            </div>
                                            <div>
                                                <h1>S/ 179.99 </h1>
                                            </div>

                                            <div className=" mr-auto ">
                                                <div className="flex items-center gap-4">
                                                    {/* Botón de menos */}
                                                    <button
                                                        onClick={disminuir}
                                                        className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                                                    >
                                                        -
                                                    </button>

                                                    {/* Cantidad */}
                                                    <span className="text-lg font-semibold">{cantidad}</span>

                                                    {/* Botón de más */}
                                                    <button
                                                        onClick={aumentar}
                                                        className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                                                    >
                                                        +
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </AccordionItem>

                            </Accordion>

                        </div>
                    </div>

                    <div className="h-[300px]">

                    </div>
                </div>

                <div className=" w-[30%] h-[500px] bg-slate-100 rounded-lg px-5 py-5  ">
                    <div className="flex border-b-1 h-[40px] ">
                        <div>
                            <h1 className="font-semibold">Productos (1) </h1>
                        </div>
                        <div className="ml-auto">
                            <h1>s/179.99</h1>
                        </div>
                    </div>
                    <div className="flex border-b-1 h-[40px] flex-col space-y-3 ">
                        <Accordion>
                            <AccordionItem
                                key="2"
                                aria-label="Accordion 1"
                                className="mx-[-8px]  font-semibold"
                                title={
                                    <div className="flex items-center justify-between w-full">
                                        <span>Descuentos (1)</span>
                                        <span className="text-right">s/10</span>
                                    </div>
                                }
                            >
                                <div className="flex items-center justify-between w-full border-b-1">
                                    <span className="font-light w-[250px]">
                                        Pinza Amperimétrica Digital Rms Real NVC UNI-T UT201+ Plus</span>
                                    <span className="text-right">s/10</span>
                                </div>
                            </AccordionItem>
                        </Accordion>

                        <div className="flex border-b-1 h-[160px] ">
                            <div>
                                <h1 className="font-semibold">Total </h1>
                            </div>
                            <div className="ml-auto">
                                <h1>s/179.99</h1>
                            </div>
                        </div>

                    </div>



                </div>



            </div>
        </div>
    )
}

export default CarritoComprasActivo