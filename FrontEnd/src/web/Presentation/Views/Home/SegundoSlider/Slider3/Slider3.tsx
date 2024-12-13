import ParedSlider3 from '../../../../../assets/Img/Home/SecondSlider/Slider3/B1.webp'



function Slider3() {
    return (
        <div className="w-full h-[550px] flex bg-transparent">
            <section className="h-full  w-full flex  pl-[50px]"
                style={{
                    backgroundImage: `url(${ParedSlider3})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
                <div className="flex  flex-col  justify-center">
                    <h2 className="text-[#ef38dd] text-[164px] font-mono mb-[-60px] ">Esta navidad</h2>
                    <h1 className=" font-bold text-[#ffff] text-[50px] font-sans ml-4">Disfruta al maximo </h1>

                    <button className="relative px-6 py-3 w-[350px] h-[80px] text-[20px] bg-gradient-to-r from-[#6bfc9c] to-[#008bee] text-white font-semibold rounded-full shadow-md transition duration-500 ease-in-out transform  hover:shadow-xl hover:text-opacity-90">
                        Consigue la Colección
                    </button>

                </div>

                <section className="h-full w-[30%] bg-transparent ml-auto flex items-center justify-center" >


                </section>
            </section>

        </div>
    )
}

export default Slider3