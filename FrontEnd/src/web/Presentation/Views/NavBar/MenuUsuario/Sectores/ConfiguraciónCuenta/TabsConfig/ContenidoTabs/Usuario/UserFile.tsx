import React, { useState } from "react";
import { Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { FaEdit } from "react-icons/fa";
function UserFile() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [numero_contacto, setnumero_contacto] = useState("1483695");
  const [nuevonumero_contacto, setnuevonumero_contacto] = useState("");


  const CambiarNumero = (onClose: () => void) => {
    if (nuevonumero_contacto.length === 9) {
      setnumero_contacto(nuevonumero_contacto);
      onClose();
    } else {
      alert("El número debe tener exactamente 9 dígitos.");
    }
  };

  const cambiarinput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d{0,9}$/.test(value)) {
      setnuevonumero_contacto(value);
    }
  };

  return (
    <div className="px-[2%] py-[20px] space-y-8">
      <h1 className="text-[27px] font-sans">Datos Personales</h1>

      <div className="flex space-x-3">
        <Input type="text" label="Nombre" defaultValue="Alexander" className="max-w-xs" />
        <Input type="text" label="Primer Apellido" defaultValue="Cordova" className="max-w-xs" />
        <Input type="text" label="Segundo Apellido" defaultValue="Almeyda" className="max-w-xs" />
      </div>

      <div className="flex space-x-3 mb-[30px]">
        <Input type="text" label="Tipo de Documento" defaultValue="CARNET 1483695" className="max-w-xs" />

        <Input
          type="number"
          label="Número de Contacto"
          value={numero_contacto}
          className="max-w-sm"
          endContent={
            <Button size="sm" color="default" onPress={onOpen}>
              <FaEdit />
            </Button>
          }
        />
        <Input isRequired type="email" label="Email" defaultValue="xander@gmail.com" className="max-w-xs" />
      </div>
      <div>
        <Button size="lg" color="primary" variant="bordered" >
          Guardar
        </Button>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Actualizar Número Telefónico</ModalHeader>
              <ModalBody>
                <p>
                  Para editar tu número de celular necesitamos validar tu identidad. Al continuar, enviaremos un código verificador al correo.
                </p>
                <Input
                  type="number"
                  label="Nuevo Número de Teléfono"
                  value={nuevonumero_contacto}
                  onChange={cambiarinput}
                  className="max-w-sm"
                  isRequired
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={() => CambiarNumero(onClose)}>
                  Actualizar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default UserFile;
