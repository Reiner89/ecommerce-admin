import ParedSlider from '../../../../../assets/Img/Home/SecondSlider/Slider1/relojes-elegantes-para-hombres-brutales.webp'
import Sector1 from '../../../../../assets/Img/Home/SecondSlider/Slider1/il_fullxfull.6268107023_o5gf.webp'
import Descuento from '../../../../../assets/Img/SeccionInicio/Slider1/Descuento_Slider1.webp'
const Slider1 = () => {
    return (
        <div className="w-full h-[550px] flex">
            <section className="h-full  w-[70%] flex flex-col justify-center pl-[50px]"
                style={{
                    backgroundImage: `url(${ParedSlider})`,
                    backgroundSize: 'cover',
                    
                    backgroundRepeat: 'no-repeat',

                }}>
                <div className="flex  flex-col bg-">
                    <h1 className=" font-bold text-[#fff] text-[50px] font-sans mb-[-60px]">Lo mejor en </h1>
                    <h2 className="text-[#ffff] text-[164px] font-serif ">Relojes</h2>
                    <button className="relative px-6 py-3 w-[350px] h-[80px] text-[20px] bg-gradient-to-r from-[#8bdce3] to-[#03a2e6] text-white font-semibold rounded-lg shadow-md transition duration-500 ease-in-out transform  hover:shadow-xl hover:text-opacity-90">
                        Consigue Uno
                    </button>
                </div>
            </section>
            <section className="h-full w-[30%]" style={{
                backgroundImage: `url(${Sector1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                <div className='mb-auto '>
                    <img src={Descuento} className=' w-[250px] relative ml-auto top-[260px] rotate-6  ' alt="" />
                </div>

            </section>
        </div>
    )
}

export default Slider1