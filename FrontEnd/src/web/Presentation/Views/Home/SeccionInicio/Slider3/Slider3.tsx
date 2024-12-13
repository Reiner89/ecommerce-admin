import ParedSlider3 from '../../../../../assets/Img/SeccionInicio/Slider3/pared3.webp'
import ArbolNavidad from '../../../../../assets/Img/SeccionInicio/Slider3/arbol_navidad.webp' 


function Slider3() {
    return (
        <div className="w-full h-[500px] flex bg-transparent">
            <section className="h-full  w-full flex  pl-[50px]"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ParedSlider3})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat', 
                }}>
                <div className="flex  flex-col  justify-center">
                    <h1 className=" font-bold text-[#ffff] text-[50px] font-sans mb-[-60px]">Disfruta al maximo </h1>
                    <h2 className="text-[#098207] text-[164px] font-mono ">Esta navidad</h2>
                    <button className="relative px-6 py-3 w-[350px] h-[80px] text-[20px] bg-gradient-to-r from-[#6bfc9c] to-[#008bee] text-white font-semibold rounded-lg shadow-md transition duration-500 ease-in-out transform  hover:shadow-xl hover:text-opacity-90">
                        Consigue la Colección
                    </button>
                    
                </div>
                
                <section className="h-full w-[30%] bg-transparent ml-auto flex items-center justify-center" >
                <img src={ArbolNavidad}  className='h-[600px] opacity-80 hover:' alt="" />

            </section>
            </section>
            
        </div>
    )
}

export default Slider3