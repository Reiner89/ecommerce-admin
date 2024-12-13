import ParedSlider from '../../../../../assets/Img/SeccionInicio/Slider1/pared.webp'
import Sector1 from '../../../../../assets/Img/SeccionInicio/Slider1/Sector1.webp'
import Descuento from '../../../../../assets/Img/SeccionInicio/Slider1/Descuento_Slider1.webp'
const Slider1 = () => {
    return (
        <div className="w-full h-[500px] flex">
            <section className="h-full  w-[70%] flex flex-col justify-center pl-[50px]"
                style={{
                    backgroundImage: `url(${ParedSlider})`,
                    
                }}>
                <div className="flex  flex-col bg-">
                    <h1 className=" font-bold text-[#fff] text-[50px] font-sans mb-[-60px]">Lo Ultimo en </h1>
                    <h2 className="text-[#ffff] text-[164px] font-serif ">MODA</h2>
                    <button className="relative px-6 py-3 w-[350px] h-[80px] text-[20px] bg-gradient-to-r from-[#fa6b48] to-[#fa4d2e] text-white font-semibold rounded-lg shadow-md transition duration-500 ease-in-out transform  hover:shadow-xl hover:text-opacity-90">
                        Consigue la Colección
                    </button>
                </div>
            </section>
            <section className="h-full w-[30%]" style={{
                backgroundImage: `url(${Sector1})`,
            }}>
                <div className='mb-auto '>
                    <img src={Descuento} className=' w-[250px] relative ml-auto top-[260px] rotate-6  ' alt="" />
                </div>

            </section>
        </div>
    )
}

export default Slider1