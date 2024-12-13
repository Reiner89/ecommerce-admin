
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Select, SelectItem } from '@nextui-org/react';
import { TbGps } from "react-icons/tb";
import { provincias } from '../AñadirDireccion/Ubicacion/Provincia';
import { BsPencilSquare } from "react-icons/bs";
const EditarDireccion = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <div>
            <Button onPress={onOpen} className='bg-[#55ccea] text-[#fff] '> <BsPencilSquare size={20}/> </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} >
                <ModalContent className="w-[50vw] h-[50vh] max-w-none ">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-row gap-1 items-center space-x-10 px-10 "> <TbGps size={50} className='mr-[20px]' /> <p className=' font-extralight text-[30px]'>  Edita tu  dirección</p></ModalHeader>
                            <ModalBody>
                                <div className=' space-y-5'>
                                    <h1>Información de quién recibe</h1>
                                    <div className=' space-y-5 '>
                                        <div className='flex space-x-6 border-b-small border-[#959595] h-[70px]'>
                                            <Input type="text" label="¿Quien Recibe?" placeholder="Ingresa nombre completo" />
                                            <Input type="text" label="Telefono de la persona que lo recibe " placeholder="(+51)" />
                                        </div>
                                        <div className=' flex flex-col space-y-5'>
                                            <h1>Detalles de la dirección</h1>
                                            <div className='flex  space-x-6'>
                                                <Select
                                                    label="Selecciona distrito"
                                                    className="max-w-xs"
                                                >
                                                    {provincias.map((provincia) => (
                                                        <SelectItem key={provincia.key}>
                                                            {provincia.label}
                                                        </SelectItem>
                                                    ))}
                                                </Select>

                                                <Input type="text" label="Avenida / Calle / Jirón " placeholder="Ingresa el nombre de tu calle" />
                                            </div>
                                            <div className='flex  space-x-6'>

                                                <Input type="text" label="Numero " placeholder="Ingresa el numero de tu calle" />
                                                <Input type="text" label="Dpto/Interior/Piso/Lote/Bloque " placeholder="Ejm. Casa 3 dpto 101" />
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancelar 
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Continuar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal></div>
    )
}

export default EditarDireccion