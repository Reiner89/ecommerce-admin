
import ParedSlider2 from '../../../../../assets/Img/SeccionInicio/Slider2/pared2.webp'
import IconoSlider2 from '../../../../../assets/Img/SeccionInicio/Slider2/tecnologia_icono.webp'

const Slider2 = () => {
    return (
        <div className="w-full h-[500px] flex bg-transparent">
            <section className="h-full  w-full flex  pl-[50px]"
                style={{
                    backgroundImage: `url(${ParedSlider2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat', 
                }}>
                <div className="flex  flex-col  justify-center">
                    <h1 className=" font-bold text-[#fff] text-[50px] font-sans mb-[-60px]">Lo Mejor en </h1>
                    <h2 className="text-[#ffff] text-[164px] font-mono ">Tecnologia</h2>
                    <button className="relative px-6 py-3 w-[350px] h-[80px] text-[20px] bg-gradient-to-r from-[#6bfc9c] to-[#008bee] text-white font-semibold rounded-lg shadow-md transition duration-500 ease-in-out transform  hover:shadow-xl hover:text-opacity-90">
                        Consigue la Colección
                    </button>
                </div>
                <section className="h-full w-[30%] bg-transparent ml-auto flex items-center justify-center" >
                <img className='w-[700px] h-[500px]'src={IconoSlider2} alt="" />

            </section>
            </section>
            
        </div>
    )
}

export default Slider2