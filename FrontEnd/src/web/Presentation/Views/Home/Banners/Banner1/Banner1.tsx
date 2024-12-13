import logobanner from '../../../../../assets/Img/Home/Banners/Banner1/logo_banner.webp'
import zapatilla1 from '../../../../../assets/Img/Home/Banners/Banner1/zapatilla1.webp'
import zapatilla2 from '../../../../../assets/Img/Home/Banners/Banner1/zapatilla2.webp'
import zapatilla3 from '../../../../../assets/Img/Home/Banners/Banner1/zapatilla3.webp'
const Banner1 = () => {
  return (
    <div className="flex items-center w-full h-[200px] bg-[#00b3ff] shadow-md">
    
    <div className="flex flex-col items-center justify-center w-1/5 bg-gray-100 p-4">
        <img
            src={logobanner}
            alt="Adidas Logo"
            className="w-20 h-auto mb-4"
        />
        <button className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
            Ir a productos
        </button>
    </div>

  
    <div className="flex-1 flex justify-center items-center gap-8 bg-[#fff]">
        <img
            src={zapatilla1}
            alt="Zapatilla 1"
            className="h-[180px] object-contain hover:scale-105 transition-transform"
        />
        <img
            src={zapatilla2}
            alt="Zapatilla 2"
            className="h-[180px] object-contain hover:scale-105 transition-transform"
        />
        <img
            src={zapatilla3}
            alt="Zapatilla 3"
            className="h-[180px] object-contain hover:scale-105 transition-transform"
        />
    </div>

   
    <div className="flex flex-col items-center justify-center w-1/5 p-4 bg-[#ffff]">
        <p className="text-gray-700 text-lg font-semibold">Zapatillas</p>
        <h1 className="text-black text-6xl font-bold">30%</h1>
        <p className="text-gray-600 text-sm">DSCTO. Productos seleccionados</p>
    </div>
</div>
  )
}

export default Banner1
