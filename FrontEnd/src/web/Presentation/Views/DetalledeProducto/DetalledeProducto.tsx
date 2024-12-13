import ImageGallery from "./AcordionProducto/AcordionProducto";
import { Button } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Cantidad } from "./AcordionProducto/ListasNumero/ListaCantidad";
import { FaCartPlus } from "react-icons/fa";
import CalificacionProducto from "./CalificacionDetalleProducto/CalificacionProducto";
import { HeartIcon } from "./Iconos_detalle/HeartIcon";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import TablaEspecificaciones from "./TablaEspecificiones/TablaEspecificaciones";
import DescripcionProducto from "./DescripcionGeneral/DescripcionGeneral";
import SliderProductosSimilares from "./SliderProductosSimilares/SliderProductosSimilares";
import { Link } from "react-router-dom";
import ReseñaProductos from "./ReseñaProducto/ReseñaProducto";

const DetalledeProducto = () => {
  const radius: Array<"md"> = ["md",];
  return (
    <div className=' w-full flex justify-center mb-[20px] flex-col items-center'>
      <div className=' w-[80%] space-y-10 mt-[20px]'>
        {radius.map((r) => (
          <Breadcrumbs key={r} radius={r} variant="solid">
            <BreadcrumbItem className="hover:text-blue-600 transition-colors duration-300">
               <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem className="hover:text-blue-600 transition-colors duration-300">
              Moda
            </BreadcrumbItem>
            <BreadcrumbItem className="hover:text-blue-600 transition-colors duration-300">
              <Link to="/SeccionFunkos">Hombre</Link> 
            </BreadcrumbItem>
            <BreadcrumbItem className="hover:text-blue-600 transition-colors duration-300">
              Zapatos
            </BreadcrumbItem>
           
          </Breadcrumbs>
        ))}
        <div className=" flex space-x-[10%]">
          <div>
            <ImageGallery />
          </div>
          <div className=" space-y-5">
            <h1 className='text-2xl font-bold'>Zapatos</h1>
            <h2 className='text-2xl font-bold'>Zapatos Formales Hombre Calimod Marrón</h2>
            <CalificacionProducto rating={4.2} reviews={9} />
            <p className='text-[15px]'>Precio :  s/150.00 </p>
            <div className="  flex  items-center w-[400px] ">

              <Select
                radius='none'
                label="Elige la Cantidad"
                className="w-[150px] h-[58px]  rounded-t-none"
              >
                {Cantidad.map((cantidad) => (
                  <SelectItem key={cantidad.key}>
                    {cantidad.label}
                  </SelectItem>
                ))}
              </Select>
              <Button
                radius="full"
                className="bg-gradient-to-tr from-[#8fdfff] to-[#0067f7] text-white shadow-lg w-[200px] h-[56px] rounded-l-none"
              >
                <FaCartPlus /> Añadir al Carrito
              </Button>
              <Button isIconOnly color="danger" aria-label="Like" className=" ml-auto">
                <HeartIcon />
              </Button>

            </div>
            <div>
              <Accordion>
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title={
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold">Descripción General</span>
                      <hr className="border-t border-gray-300 mt-2" />
                    </div>
                  }
                  className="w-[700px]"
                >
                  <div className=" w-[700px] h-[100px]">
                    <p className="text-[15px]">Descubre la combinación perfecta entre elegancia y confort con los Zapatos Formales Calimod Marrón. Diseñados especialmente para el hombre moderno, estos zapatos destacan por su calidad premium y estilo sofisticado, ideales para ocasiones formales o laborales. Fabricados con materiales duraderos y un acabado impecable, ofrecen comodidad durante todo el día gracias a su plantilla ergonómica y suela antideslizante. Complementa tu guardarropa con este esencial versátil que refleja buen gusto y distinción. ¡Atrévete a lucir siempre impecable con Calimod!</p>
                  </div>
                </AccordionItem>

              </Accordion>

            </div>
          </div>

        </div>
        <div className=" bg-gradient-to-tr from-[#8fdfff] to-[#0067f7] rounded-lg flex space-x-[1%] px-[20px] py-[2%]" >
          <div className="w-[49%]">

            <TablaEspecificaciones />
          </div>
          <div className="w-[49%]">
            <h1 className=" text-[#fff] text-xl font-bold p-4">Información General</h1>
            <hr className="border-t border-gray-300 mt-2 mb" />
            <DescripcionProducto />
          </div>
        </div>
        <section className="bg-gradient-to-tr from-[#8fdfff] to-[#0067f7] rounded-lg flex space-x-[1%] px-[20px] py-[2%] flex-col mb-[20px]">
          <p className="text-[#fff] text-xl font-bold ml-3 mb-[2%] ">Varias Personas tambien buscan este producto</p>
          <p className="border-t border-gray-300 mb-5 " />
              <SliderProductosSimilares/>
        </section>
        <section className="space-x-[1%] px-[20px] py-[2%] bg-gradient-to-tr from-[#8fdfff] to-[#0067f7] rounded-lg w-full mt-[20px] h-[550px]">
          <h1 className="text-[#fff] text-xl font-bold ml-[10px]">Comentarios Sobre este producto</h1>
          <hr className="border-t border-gray-300 mb-5 " />
          <div className="flex">
            <div>
              <ReseñaProductos/>
            </div>
          </div>
          
        </section>
        
      </div>
      
    </div>
  );
};

export default DetalledeProducto;
