import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { FaCreditCard } from "react-icons/fa";
import { AiOutlineFileSearch } from "react-icons/ai";
import { EyeSlashFilledIcon } from "../../../../../../../../../Components/Icons/IconsE-commerce";
import { EyeFilledIcon } from "../../../../../../../../../Components/Icons/IconsE-commerce";
const MetodosdePago = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [fecha, setFecha] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value.replace(/[^\d]/g, ""); 
    if (valor.length <= 2) {
      
      setFecha(valor);
    } else if (valor.length <= 6) {
      
      setFecha(`${valor.slice(0, 2)}-${valor.slice(2)}`);
    }
  };
  

  return (
    <div className="px-5 py-5 space-y-4">
      <div className="space-y-2">
        <h1 className=" text-[30px]">Medios de Pago</h1>
        <h1>Tarjeta de Credito</h1>
      </div>
      <div className=" h-[250px] flex flex-col items-center justify-center">
        <AiOutlineFileSearch size={170} color="grey" />
        <h1>No tienes tarjetas de crédito disponibles</h1>
      </div>
      <div>
        <Button onPress={onOpen}>Añade nuevo metodo de pago</Button>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="w-[50vw] h-[30vh] max-w-none">
          {(onClose) => (
            <>
              <ModalHeader className="flex gap-6 items-center">
                <FaCreditCard size={20} color="grey" /> Añade tu tarjeta
              </ModalHeader>
              <ModalBody>
                <div>
                  <Input
                    isRequired
                    labelPlacement="outside"
                    label="Numero de Tarjeta"
                    variant="bordered"
                    placeholder="0000 0000 0000 0000"
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                        aria-label="toggle password visibility"
                      >
                         {isVisible ? (
                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                          ) : (
                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                          )}
                      </button>
                    }
                    type={isVisible ? "text" : "password"}
                    className="max-w-xs"
                  />
                </div>
                <div className="flex space-x-5">
                  <Input
                    label="Fecha de Expiración"
                    placeholder="MM-YYYY"
                    value={fecha}
                    onChange={handleChange}
                    maxLength={7}
                  />
                  <Input type="number" label="Codigo de Seguridad" placeholder="CVV" />
                </div>
              </ModalBody>
              <ModalFooter className="flex items-center justify-center">
                <Button color="primary" onPress={onClose} className="w-[600px]">
                  Agregar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default MetodosdePago;
