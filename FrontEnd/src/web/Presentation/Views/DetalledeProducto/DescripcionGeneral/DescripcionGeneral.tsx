import { Accordion, AccordionItem } from "@nextui-org/react";
export default function DescripcionProducto() {
    return (
        <div className="w-full p-4">
            <Accordion>
                <AccordionItem
                    key="1"
                    aria-label="Accordion 1"
                    title={
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-[#fff]">Descripción</span>
                            <hr className="border-t border-gray-300 mt-2" />
                        </div>
                    }
                    
                >
                    <ul className="list-disc list-inside space-y-2 text-sm text-[#fff] ">
                        <li>Figura coleccionable de 10 cm inspirada en Batman de la trilogía *The Dark Knight*.</li>
                        <li>Detalle impresionante del traje blindado y la icónica capa.</li>
                        <li>Fabricado en vinilo duradero para una mayor resistencia y calidad.</li>
                        <li>Edición especial para conmemorar la película dirigida por Christopher Nolan.</li>
                        <li>Producto oficial licenciado de DC Comics.</li>
                        <li>Ideal para coleccionistas y fanáticos del Caballero Oscuro.</li>
                        <li>Diseño estilizado y moderno, típico de los Funko Pop!.</li>
                        <li>Viene en caja protectora con ventana para exhibición.</li>
                        <li>Apto para todas las edades (mayores de 3 años).</li>
                        <li>No requiere ensamblaje.</li>
                    </ul>
                </AccordionItem>
                <AccordionItem
                    key="2"
                    aria-label="Accordion 2"
                    title={
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-[#fff]">Uso Sugerido</span>
                            <hr className=" border-gray-300 mt-2" />
                        </div>
                    }
                    className=""
                >
                    <p className="text-sm text-[#fff]">
                        Perfecto para decoración, coleccionismo o como regalo para los fans de Batman. Puede colocarse en escritorios, estanterías o vitrinas para exhibir su impresionante diseño.
                    </p>

                </AccordionItem>
                <AccordionItem
                    key="3"
                    aria-label="Accordion 3"
                    title={
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-[#fff]">Otros Ingredientes</span>
                            <hr className=" border-gray-300 mt-2" />
                        </div>
                    }
                    className=""
                >
                  <p className="text-sm text-[#fff]">
                Figura de vinilo de alta calidad, con pintura detallada y resistente. No incluye accesorios adicionales.
            </p>

                </AccordionItem>

            </Accordion>


          

            
        </div>
    );
}
