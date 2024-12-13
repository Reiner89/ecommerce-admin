import Dropdown_recomendados from "../dropdown_recomendados";
import { Pagination } from "@nextui-org/react";
import Smartwatch_Aventadro from "../../../../assets/Img/ListadeProductos/Relojes/Smartwatch Aventador Cerchio.webp";
import RelojMason from "../../../../assets/Img/ListadeProductos/Relojes/Reloj Mason 1791788.webp";
import RelojTommy1791476 from "../../../../assets/Img/ListadeProductos/Relojes/Reloj Tommy Hilfiger Decker 1791476 Azul.webp";
import SmartwatchRex from "../../../../assets/Img/ListadeProductos/Relojes/w=800,h=800,fit=pad.webp";
import RedmiWatch5 from "../../../../assets/Img/ListadeProductos/Relojes/Redmi Watch 5 Activeblack.webp";
import RelojTommyHilfigerDaniel1710414 from "../../../../assets/Img/ListadeProductos/Relojes/Reloj Tommy Hilfiger Daniel 1710414.webp";
import RelojTommyHilfigerBaker from "../../../../assets/Img/ListadeProductos/Relojes/Reloj Tommy Hilfiger Baker.webp";
import RelojPared from "../../../../assets/Img/ListadeProductos/Relojes/Reloj de Pared Manchas Negras 30cm.webp";
import RelojHombreDeportivo from "../../../../assets/Img/ListadeProductos/Relojes/Reloj Hombre Deportivo Análogo Digital.webp";
import RelojWoodenNatural29cm from "../../../../assets/Img/ListadeProductos/Relojes/Reloj Wooden Natural 29cm.webp";
import RelojTommyHilfigerLuke from "../../../../assets/Img/ListadeProductos/Relojes/Reloj Tommy Hilfiger Luke.webp";

function Seccion_productos() {
  const colors: Array<"primary"> = ["primary"];

  const productos = [
    {
      id: 1,
      marca: "LAMBORGHINI",
      descripcion: "Smartwatch Aventador Cerchio ",
      precio: "S/609",
      precioAnterior: "S/ 1,390",
      imagen: Smartwatch_Aventadro,
    },
    {
      id: 2,
      marca: "TOMMY HILFIGER",
      descripcion: "Reloj Mason 1791788",
      precio: "S/ 385",
      precioAnterior: "S/ 750",
      imagen: RelojMason,
    },
    {
      id: 3,
      marca: "TOMMY HILFIGER",
      descripcion: "Reloj Tommy Hilfiger Decker 1791476 Azul",
      precio: "S/ 388",
      precioAnterior: "S/ 776",
      imagen: RelojTommy1791476,
    },
    {
      id: 4,
      marca: "AMAZFIT",
      descripcion: "Smartwatch T-REX 2",
      precio: "S/ 659",
      precioAnterior: "S/1,139",
      imagen: SmartwatchRex,
    },
    {
      id: 5,
      marca: "Xiaomi",
      descripcion: "Redmi Watch 5 Activeblack",
      precio: "S/ 179",
      precioAnterior: "S/ 300",
      imagen: RedmiWatch5,
    },
    {
      id: 6,
      marca: "TOMMY HILFIGER",
      descripcion: "Reloj Tommy Hilfiger Daniel 1710414 ",
      precio: "S/ 418",
      precioAnterior: "S/ 836",
      imagen: RelojTommyHilfigerDaniel1710414,
    },
    {
      id: 7,
      marca: "TOMMY HILFIGER",
      descripcion: "Reloj Tommy Hilfiger Baker",
      precio: "S/ 388",
      precioAnterior: "S/ 776",
      imagen: RelojTommyHilfigerBaker,
    },
    {
      id: 8,
      marca: "MICA",
      descripcion: "Reloj de Pared Manchas Negras 30cm",
      precio: "S/ 17.90",
      precioAnterior: "S/ 29.90",
      imagen: RelojPared,
    },
    {
      id: 9,
      marca: "SANDA",
      descripcion: "Reloj para Hombre Deportivo Digital ",
      precio: "S/ 80",
      precioAnterior: "S/ 160",
      imagen: RelojHombreDeportivo,
    },
    {
      id: 10,
      marca: "TOMMY HILFIGER",
      descripcion: "Reloj Tommy Hilfiger Luke ",
      precio: "S/400",
      precioAnterior: "S/ 850",
      imagen: RelojTommyHilfigerLuke,
    },
    {
      id: 11,
      marca: "SANDA",
      descripcion: "Reloj Hombre Deportivo Análogo Digital ",
      precio: "S/400",
      precioAnterior: "S/ 850",
      imagen: RelojHombreDeportivo,
    },
    {
      id: 12,
      marca: "JUST HOME COLLECTION",
      descripcion: "Reloj Wooden Natural 29cm ",
      precio: "S/23.00",
      precioAnterior: "S/ 29.90",
      imagen: RelojWoodenNatural29cm,
    },
  ];

  return (
    <div className="w-3/4">
      <div className="flex justify-between items-center mb-5">
        <Dropdown_recomendados />
        <div className="flex flex-wrap gap-3 items-center">
          {colors.map((color) => (
            <Pagination key={color} total={10} initialPage={1} color={color} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="h-40  rounded-lg mb-3">
              <img
                src={producto.imagen}
                alt={producto.descripcion}
                className="object-contain h-full w-full"
              />
            </div>
            <h3 className="text-sm font-semibold">{producto.marca}</h3>
            <p className="text-xs text-gray-600">{producto.descripcion}</p>
            <p className="text-red-500 font-semibold mt-2">
              {producto.precio}{" "}
              <span className="line-through text-gray-500">
                {producto.precioAnterior}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Seccion_productos;
