import { CheckboxGroup, Checkbox, Accordion, AccordionItem } from "@nextui-org/react";
import StarIcon from '@mui/icons-material/Star';

function AcordionCalificacion() {
    const ratings = [
        { value: '5Estrellas', stars: 5 },
        { value: '4Estrellas', stars: 4 },
        { value: '3Estrellas', stars: 3 },
        { value: '2Estrellas', stars: 2 },
        { value: '1Estrellas', stars: 1 },
       
    ];
    

    return (
        <Accordion variant="light">
            <AccordionItem
                key="1"
                aria-label="Calificación del producto"
                title={<div className="text-lg font-bold">Calificación del producto</div>}
                className="ml-[-8px]"
            >
                <ul className="list-none space-y-2">
                    <CheckboxGroup>

                        {ratings.map(rating => (
                            <Checkbox key={rating.value} value={rating.value}>
                                {Array.from({ length: rating.stars }, (_, i) => (
                                    <StarIcon key={i} />
                                ))}
                            </Checkbox>
                        ))}
                    </CheckboxGroup>
                </ul>
            </AccordionItem>
        </Accordion>
    );
}

export default AcordionCalificacion;