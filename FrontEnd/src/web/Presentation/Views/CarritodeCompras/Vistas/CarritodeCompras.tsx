import { FaShoppingBasket } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
const CarritodeCompras = () => {
  return (
    <div className=" h-[600px] flex items-center justify-center">
      <div className=" h-[400px] w-[900px] bg-slate-100 rounded-lg flex justify-center items-center flex-col">
        <div className="flex items-center justify-center space-x-10 h-[300px]">
          <FaShoppingBasket size={170} color="grey" />
          <div>
            <h1 className=" font-bold text-[30px]"> Tu Carro está vacío</h1>
            <h1>¡Aprovecha! Tenemos miles de productos en oferta y oportunidades únicas.</h1>
            <h1>¡Aprovecha! Tenemos miles de productos en oferta y oportunidades únicas.</h1>
          </div>

        </div>


        <Button className="w-[600px] px-0   ">
          <Link to="/lista-productos" className=" w-full h-full flex items-center justify-center">
            Ver Ofertas
          </Link>
        </Button> 

      </div>

    </div>
  )
}

export default CarritodeCompras