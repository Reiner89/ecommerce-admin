import { useState } from 'react';
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import FunkoPeter from "../../../../../../assets/Img/NuevosProductos/funko_peterquill.jpg"

const CardsProductos = [
  { categoria: "ElectroHogar", marca: "Asus", nombre: "Licuadora 3 velocidades", precio: "1200" },
  { categoria: "ElectroHogar", marca: "Asus", nombre: "Licuadora 3 velocidades", precio: "1200" },
  { categoria: "ElectroHogar", marca: "Asus", nombre: "Licuadora 3 velocidades", precio: "1200" },
  { categoria: "ElectroHogar", marca: "Asus", nombre: "Licuadora 3 velocidades", precio: "1200" },
  { categoria: "ElectroHogar", marca: "Asus", nombre: "Licuadora 3 velocidades", precio: "1200" },
  { categoria: "ElectroHogar", marca: "Asus", nombre: "Licuadora 3 velocidades", precio: "1200" },
  { categoria: "ElectroHogar", marca: "Asus", nombre: "Licuadora 3 velocidades", precio: "1200" },
  { categoria: "ElectroHogar", marca: "Asus", nombre: "Licuadora 3 velocidades", precio: "1200" },
  { categoria: "ElectroHogar", marca: "Asus", nombre: "Licuadora 3 velocidades", precio: "1200" },
  { categoria: "ElectroHogar", marca: "Asus", nombre: "Licuadora 3 velocidades", precio: "1200" },
  { categoria: "ElectroHogar", marca: "Asus", nombre: "Licuadora 3 velocidades", precio: "1200" },
  { categoria: "ElectroHogar", marca: "Asus", nombre: "Licuadora 3 velocidades", precio: "1200" },
  { categoria: "ElectroHogar", marca: "Asus", nombre: "Licuadora 3 velocidades", precio: "1200" },
  { categoria: "ElectroHogar", marca: "Asus", nombre: "Licuadora 3 velocidades", precio: "1200" },
  { categoria: "ElectroHogar", marca: "Asus", nombre: "Licuadora 3 velocidades", precio: "1200" },
  { categoria: "ElectroHogar", marca: "Asus", nombre: "Licuadora 3 velocidades", precio: "1200" },
  { categoria: "ElectroHogar", marca: "Asus", nombre: "Licuadora 3 velocidades", precio: "1200" },
  { categoria: "ElectroHogar", marca: "Asus", nombre: "Licuadora 3 velocidades", precio: "1200" },
  { categoria: "ElectroHogar", marca: "Asus", nombre: "Licuadora 3 velocidades", precio: "1200" },
  { categoria: "ElectroHogar", marca: "Asus", nombre: "Licuadora 3 velocidades", precio: "1200" },
  { categoria: "ElectroHogar", marca: "Asus", nombre: "Licuadora 3 velocidades", precio: "1200" }
];

const SliderProductos1 = () => {
  const [ConHover, setConHover] = useState(false);

  return (
    <div>
      {CardsProductos.map((productos_cartas, index) => (
        <Card
          key={index}
          isFooterBlurred
          radius="lg"
          className="border-none h-[400px]"
          onMouseEnter={() => setConHover(true)}
          onMouseLeave={() => setConHover(false)}
        >
          <Image
            alt="Funko de Peter Quill"
            className="object-cover mb-11 transition-transform duration-500 ease-in-out transform hover:scale-110"
            height={200}
            src={FunkoPeter}
            width={200}
          />
          <CardFooter
            className={`flex flex-col transition-all duration-500 ease-in-out space-y-4 bg-gradient-to-r from-cyan-500 to-blue-500 justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 ${ConHover ? 'h-[200px] py-4' : 'h-[120px] py-2'
              }`}
          >
            {ConHover && (
              <h1 className="text-white text-[17px] mr-auto"> {productos_cartas.categoria}  </h1>
            )}
            <div className="mr-auto font-medium text-[15px]">
              <p className="text-white">{productos_cartas.marca}</p>
              <p className="text-white">{productos_cartas.nombre}</p>
            </div>
            <p className="text-[17px] font-medium text-white mr-auto">
              {ConHover ? `s/ ${productos_cartas.precio}` : productos_cartas.precio}
            </p>

            <div>
              <Button
                className="text-[14px] font-medium w-[180px] text-white bg-[#000] mr-auto"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                Añadir Al carrito
              </Button>
            </div>
          </CardFooter>
        </Card>


      )


      )}

    </div>
  )
}

export default SliderProductos1