
import { CheckboxGroup, Checkbox, Accordion, AccordionItem } from "@nextui-org/react";
function AcordionPrecio() {
  return (
    <Accordion variant="light">
            <AccordionItem
                key="1"
                aria-label="Precio"
                title={<div className="text-lg font-bold">Precio</div>}
                className=" ml-[-8px]"
            >
                <ul className='list-none space-y-2'>
                    
                    <CheckboxGroup>
                        <Checkbox value="Acer">Hasta s/50</Checkbox>
                        <Checkbox value="Advance">s/50 - s/100</Checkbox>
                        <Checkbox value="Amd">s/100 - s/250</Checkbox>
                        <Checkbox value="Apple">s/500 - s/1000</Checkbox>
                        <Checkbox value="Asus">s/1000 - s/2000</Checkbox>
                    </CheckboxGroup>
                    
                </ul>

            </AccordionItem>

        </Accordion>
  )
}

export default AcordionPrecio