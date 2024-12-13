import { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
const brands = [
    { name: 'Advance', letter: 'A' },
    { name: 'Alcatel', letter: 'A' },
    { name: 'Bmobile', letter: 'B' },
    { name: 'Generico', letter: 'G' },
    { name: 'Honor', letter: 'H' },
    { name: 'Importado', letter: 'I' },
    { name: 'Ipro', letter: 'I' },
    { name: 'Landbyte', letter: 'L' },
    { name: 'Logic', letter: 'L' },
    { name: 'Movisun', letter: 'M' },
    { name: 'Nokia', letter: 'N' }
];

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');


function ModalTecnolgia() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [activeLetter, setActiveLetter] = useState<string>('A');

    // Filter brands based on the selected letter
    const filteredBrands = brands.filter(brand => brand.letter === activeLetter);

    const handleBrandChange = (brand: string) => {
        setSelectedBrands(prev => {
            if (prev.includes(brand)) {
                return prev.filter(b => b !== brand);
            } else {
                return [...prev, brand];
            }
        });
    };

    const clearFilters = () => {
        setSelectedBrands([]);
    };

    return (
        <>
            <Button onPress={onOpen}>Open Filter Modal</Button>

            <Modal isOpen={isOpen} onClose={onClose} size="3xl">
                <ModalContent>
                    <ModalHeader>Marca</ModalHeader>
                    <ModalBody>
                        {/* Alphabet Filter */}
                        <div className="flex justify-between border-b pb-2 mb-4">
                            {alphabet.map(letter => (
                                <button
                                    key={letter}
                                    className={`px-2 ${letter === activeLetter ? 'font-light text-black' : 'text-gray-500'}`}
                                    onClick={() => setActiveLetter(letter)}
                                >
                                    {letter}
                                </button>
                            ))}
                        </div>

                        {/* Brand checkboxes */}
                        <div className="grid grid-cols-2 gap-4">
                            {filteredBrands.length > 0 ? filteredBrands.map(brand => (
                                <div key={brand.name}>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            checked={selectedBrands.includes(brand.name)}
                                            onChange={() => handleBrandChange(brand.name)}
                                        />
                                        <span>{brand.name}</span>
                                    </label>
                                </div>
                            )) : <p>No brands available for {activeLetter}</p>}
                        </div>

                        <div className="mt-4">
                            <button onClick={clearFilters} className="text-blue-500 underline">Limpiar filtros</button>
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" onPress={onClose}>Ver resultados</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ModalTecnolgia;
