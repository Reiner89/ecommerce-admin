import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { CiUser } from "react-icons/ci";
import { MdAddHomeWork } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import DireccionesUser from "../Direcciones/DireccionesUser";
import MetodosdePago from "./MetodosPago/MetodosdePago";
import ConfigurarCuenta from "./ConfigurarCuenta/ConfigurarCuenta";
import UserFile from "./UserFile";
function Usuariotab() {
    const [isVertical,] = React.useState(true);

    return (
        <div className="relative flex flex-col px-4 w-[100%] h-[600px] justify-center items-center ">
            
            <div className="sticky top-0 z-10 bg-white mb-4">

            </div>


            <div className="flex w-full flex-col h-full justify-center items-center">
                <Tabs aria-label="Options" isVertical={isVertical}>

                    <Tab
                        className=" h-[70px] w-full "
                        key="DatosPersonales"
                        title={
                            <div className="flex items-center space-x-2 ">
                                <div className=" w-[25px]">
                                    <CiUser size={20} />
                                </div>
                                <span className="w-[130px]">Datos Personales</span>
                                <FaChevronRight />
                            </div>
                        }
                    >
                        <Card className="h-[467px] w-[830px]">
                            <CardBody>
                                <UserFile/>
                            </CardBody>
                        </Card>
                    </Tab>

                    <Tab
                        className=" h-[70px]"
                        key="Direcciones"
                        title={
                            <div className="flex items-center space-x-2">
                                <div className="w-[25px]">
                                    <MdAddHomeWork size={20} />
                                </div>
                                <span className="w-[130px]">Direcciones</span>
                                <FaChevronRight />
                            </div>
                        }
                    >
                        <Card className="h-[467px] w-[830px]">
                            <CardBody>
                                <DireccionesUser/>
                            </CardBody>
                        </Card>
                    </Tab>

                    <Tab
                        className=" h-[70px]"
                        key="MediosPago"
                        title={
                            <div className="flex items-center space-x-2">
                                <div className="w-[25px]">
                                    <MdOutlinePayment size={20} />
                                </div>
                                <span className="w-[130px]">Medios de Pago</span>
                                <FaChevronRight />
                            </div>
                        }
                    >
                        <Card className="h-[467px] w-[830px]">
                            <CardBody>
                                <MetodosdePago/>
                            </CardBody>
                        </Card>
                    </Tab>

                   

                    <Tab
                        className=" h-[70px]"
                        key="ConfigurarCuenta"
                        title={
                            <div className="flex items-center space-x-2">
                                <MdManageAccounts size={20} />
                                <span className="w-[130px]">Configurar mi cuenta</span>
                                <FaChevronRight />
                            </div>
                        }
                    >
                        <Card className="h-[467px] w-[830px]">
                            <CardBody>
                                <ConfigurarCuenta/>
                            </CardBody>
                        </Card>
                    </Tab>

                    <Tab
                        className=" h-[70px]"
                        key="CerrarSesion"
                        title={
                            <div className="flex items-center space-x-2">
                                <MdAddHomeWork size={20} />
                                <span className="w-[130px]">Cerrar Sesión</span>
                                <FaChevronRight />
                            </div>
                        }
                    >
                        <Card className="h-[467px] w-[830px]">
                            <CardBody>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}

export default Usuariotab;
