import '../../../../assets/css/SeccionExclusivo.css'
import { Image } from '@nextui-org/image';
import ImagenLaptop from '../../../../assets/Img/SeccionExclusivos/laptop.png';
import ImagenPolo from '../../../../assets/Img/Home/SeccionNuevos/46 (1).webp'

function SeccionExclusiva() {
  return (
    <div className="flex justify-center h-[400px]">
      <div
        className="animacion_desliz_izquierda bg-indigo-800 to-90% flex items-center justify-between overflow-hidden pl-[40px] w-[700px]"
       
      >
        <div className="text-[#fff]">
          <h1 className="font-bold text-[50px]">Exclusivo</h1>
          <div className="mb-[20px] font-semibold text-[20px]">
            <h2>NIGHTWING ENTRA</h2>
            <h2>EN ACCIÓN</h2>
          </div>
          <button className="relative px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg shadow-md transition duration-500 ease-in-out transform hover:bg-gradient-to-l hover:from-[#91eedd] hover:to-[#1f26eb] hover:scale-110 hover:rotate-2 hover:shadow-xl hover:text-opacity-90">
            Compra la Colección
          </button>
        </div>
        <Image
          src={ImagenPolo}
          width={400}
          className="h-[400px] relative left-10 transition-all duration-500 ease-in-out transform rounded-none"
          alt="imagen de la sección"
        />
      </div>
      <div
        className="animacion_desliz_derecha bg-[#dc3e45] flex items-center justify-between overflow-hidden pl-[40px] w-[700px]"
       
      >
        <div className='text-[#fff]'>
          <h1 className=' font-bold text-[50px]'>Lo Mejor!</h1>
          <div className='mb-[20px] font-semibold text-[20px]'>
            <h2 >LUCETE CON LO MEJOR</h2>
            <h2 >EN LAPTOPS </h2>
          </div>
          <button className="relative px-6 py-3 bg-[#41991e] text-white font-semibold rounded-lg shadow-md transition duration-500 ease-in-out transform hover:bg-gradient-to-l hover:from-[#dcbc95] hover:to-[#fae62f] hover:scale-110 hover:rotate-2 hover:shadow-xl hover:text-opacity-90">
            Compra la Colección
          </button>

        </div>
        <Image
          src={ImagenLaptop}
          width={400}
          className="h-[320px]  transition-all duration-500 ease-in-out transform rounded-none"
          alt="imagen de la sección"
        />
      </div>
    </div>
  );
}

export default SeccionExclusiva;