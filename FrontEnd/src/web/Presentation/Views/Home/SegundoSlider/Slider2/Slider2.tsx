import ParedSlider2 from '../../../../../assets/Img/Home/SecondSlider/Slider2/Celulares_Wallpaper.webp';

const Slider2 = () => {
    return (
        <div className="w-full h-[550px] flex bg-transparent relative">
          
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ParedSlider2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>

         
            <section className="relative h-full w-full flex pl-[50px] z-10">
                <div className="flex flex-col justify-center">
                    <h1 className="font-bold text-[#22faa7] text-[50px] font-sans mb-[-60px] drop-shadow-lg">
                        Actualízate con un nuevo
                    </h1>
                    <h2 className="text-[#0862f2] text-[164px] font-mono drop-shadow-lg">
                        SmartPhone
                    </h2>
                    <button className="relative px-6 py-3 w-[350px] h-[80px] text-[20px] bg-gradient-to-r from-[#6fa4b4] to-[#008bee] text-white font-semibold rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:shadow-xl hover:scale-105">
                        Consigue la Colección
                    </button>
                </div>
                <section className="h-full w-[30%] bg-transparent ml-auto flex items-center justify-center"></section>
            </section>
        </div>
    );
};

export default Slider2;
