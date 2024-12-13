import { Accordion, AccordionItem, Input } from "@nextui-org/react";
import { SearchIcon } from "../../../../Components/Icons/IconsE-commerce";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import ModalTecnolgia from "../../ModalTecnologia/ModalTecnolgia";
function AcordionMarca() {
    return (
        <Accordion variant="light">
            <AccordionItem
                key="1"
                aria-label="Categoría"
                title={<div className="text-lg font-bold">Marca</div>}
                className=" ml-[-8px]"
            >
                <ul className='list-none space-y-2'>
                    <Input
                        classNames={{
                            base: "max-w-full sm:max-w-[20rem] h-10",
                            mainWrapper: "h-full",
                            input: "text-small",
                            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                        }}
                        placeholder="Escribe lo que buscas"
                        size="sm"
                        startContent={<SearchIcon size={18} />}
                        type="search"
                    />
                    <CheckboxGroup
                        
                        
                    >
                        <Checkbox value="4m">4m</Checkbox>
                        <Checkbox value="A Brand">A brand</Checkbox>
                        <Checkbox value="Accusplit">Accusplit</Checkbox>
                        <Checkbox value="Adidas">Adidas</Checkbox>
                        <Checkbox value="Asus">Aerostar</Checkbox>
                    </CheckboxGroup>
                    <ModalTecnolgia/>
                </ul>

            </AccordionItem>

        </Accordion>
    )
}

export default AcordionMarca