import React from "react";
import { Modal, ModalBody, ModalFooter, Button } from "@nextui-org/react";

type FlagModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (flag: string) => void;
};

const FlagModal: React.FC<FlagModalProps> = ({ isOpen, onClose, onSelect }) => {
    const countries = [
        { name: "Venezuela", flag: "https://flagcdn.com/w320/ve.png" },
        { name: "Argentina", flag: "https://flagcdn.com/w320/ar.png" },
        // Añadir más países aquí
    ];

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalBody>
                <div className="flex flex-wrap gap-4">
                    {countries.map((country, index) => (
                        <div
                            key={index}
                            className="cursor-pointer"
                            onClick={() => onSelect(country.flag)}
                        >
                            <img src={country.flag} alt={country.name} className="w-16 h-16" />
                            <p className="text-center">{country.name}</p>
                        </div>
                    ))}
                </div>
            </ModalBody>
            <ModalFooter>
                <Button onClick={onClose}>Close</Button>
            </ModalFooter>
        </Modal>
    );
};

export default FlagModal;
