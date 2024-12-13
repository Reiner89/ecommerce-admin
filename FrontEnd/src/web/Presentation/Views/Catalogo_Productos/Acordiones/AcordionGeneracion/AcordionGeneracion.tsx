import { CheckboxGroup, Checkbox, Accordion, AccordionItem } from "@nextui-org/react";
function AcordionGeneracion() {
  return (
    <Accordion variant="light">
            <AccordionItem
                key="1"
                aria-label="Precio"
                title={<div className="text-lg font-bold">Generación</div>}
                className=" ml-[-8px]"
            >
                <ul className='list-none space-y-2'>
                    
                    <CheckboxGroup>
                        <Checkbox value="5Estrellas">2g</Checkbox>
                        <Checkbox value="4Estrellas">3g</Checkbox>
                        <Checkbox value="3Estrellas">4g</Checkbox>
                        <Checkbox value="3Estrellas">4g lte</Checkbox>
                        <Checkbox value="3Estrellas">5g</Checkbox>
                        
                        
                    </CheckboxGroup>
                    
                </ul>

            </AccordionItem>

        </Accordion>
  )
}

export default AcordionGeneracion