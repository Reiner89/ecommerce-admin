import { Card } from "@nextui-org/react";
import Rating from "@mui/material/Rating";
import CalificarProducto from "../CalificarProducto";

const ReseñaProductos = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md flex w-[1400px] ">
            <div>
            <h2 className="text-lg font-semibold mb-4">Comentarios de este producto</h2>

            <div className="flex justify-between items-center mb-6 bg">
                <div className="flex items-center">
                    <span className="text-4xl font-bold">4</span>
                    <span className="text-lg ml-2">/5</span>
                    <Rating value={4} readOnly size="large" />
                    <span className="ml-4 text-sm text-gray-600">2 comentarios</span>
                </div>
                <div className="flex w-[500px] ml-auto ">
                    <CalificarProducto />
                </div>
            </div>


            <div className="mb-6">
                {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center mb-2">
                        <span className="w-8 text-sm">{rating} ⭐</span>
                        <div className="w-full h-2 bg-gray-200 rounded-lg mx-2">
                            <div className={`h-2 rounded-lg ${rating === 4 ? 'bg-yellow-400 w-2/3' : 'bg-gray-300 w-1/12'}`}></div>
                        </div>
                        <span className="text-sm text-gray-600">{rating === 4 ? '2' : '0'}</span>
                    </div>
                ))}
            </div>
            </div>
            
            <div className=" md:grid-cols-2  space-y-5 flex flex-col justify-center ml-[5%] ">
                <Card className="p-4 shadow-md">
                    <h4 className="font-semibold">Funciones básicas, pero no es el color de la imagen</h4>
                    <span className="text-sm text-gray-500 mb-2 block">por Juan - hace 1 mes</span>
                    <Rating value={3} readOnly size="small" />
                    <p className="text-sm my-2">Muy comodo</p>
                    <div className="flex space-x-4">
                        <button className="text-gray-600 hover:text-blue-600">👍</button>
                        <button className="text-gray-600 hover:text-blue-600">👎</button>
                    </div>
                </Card>

                <Card className="p-4 shadow-md">
                    <h4 className="font-semibold">Rodrigo</h4>
                    <span className="text-sm text-gray-500 mb-2 block">hace 11 meses</span>
                    <Rating value={4} readOnly size="small" />
                    <p className="text-sm my-2">Buena calidad</p>
                    <div className="flex space-x-4">
                        <button className="text-gray-600 hover:text-blue-600">👍</button>
                        <button className="text-gray-600 hover:text-blue-600">👎</button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ReseñaProductos;
