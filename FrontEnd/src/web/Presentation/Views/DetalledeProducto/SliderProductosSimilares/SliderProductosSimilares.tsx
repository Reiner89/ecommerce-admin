import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import FunkoEddy from "../../../../assets/Img/NuevosProductos/funko_eddy.jpg";



function SliderProductosSimilares() {
    return (
        <Swiper
            className='h-[450px]'
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={5}
            loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{
                delay: 10500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
        >
            <SwiperSlide>
                <Card
                    isFooterBlurred
                    radius="lg"
                    className="border-none h-[400px] flex items-center"
                >
                    <Image
                        alt="Funko de Batman"
                        className="object-cover mb-11 transition-transform duration-500 ease-in-out transform hover:scale-110"
                        height={200}
                        src={FunkoEddy}
                        width={200}
                    />
                    <CardFooter className=" flex flex-col h-[200px] space-y-4  justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <h1 className="text-tiny text-black/80 mr-auto text-[15px]">Pop!</h1>
                        <div className='mr-auto font-medium text-[15px]'>
                            <p className=" text-black/80 ">Funko de Eddy</p>
                            <p className=" text-black/80 ">Stranger Things</p>
                        </div>
                        <p className=" text-black/80 mr-auto text-[17px]" > s/62.00</p>
                        <div>
                            <Button className="text-[14px] font-medium  w-[180px] text-white bg-gradient-to-r from-cyan-500 to-blue-500 mr-auto" variant="flat" color="default" radius="lg" size="sm">
                                Añadir al Carrito
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    isFooterBlurred
                    radius="lg"
                    className="border-none h-[400px] flex items-center"
                >
                    <Image
                        alt="Funko de Batman"
                        className="object-cover mb-11 transition-transform duration-500 ease-in-out transform hover:scale-110"
                        height={200}
                        src={FunkoEddy}
                        width={200}
                    />
                    <CardFooter className=" flex flex-col h-[200px] space-y-4  justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <h1 className="text-tiny text-black/80 mr-auto text-[15px]">Pop!</h1>
                        <div className='mr-auto font-medium text-[15px]'>
                            <p className=" text-black/80 ">Funko de Eddy</p>
                            <p className=" text-black/80 ">Stranger Things</p>
                        </div>
                        <p className=" text-black/80 mr-auto text-[17px]" > s/62.00</p>
                        <div>
                            <Button className="text-[14px] font-medium  w-[180px] text-white bg-gradient-to-r from-cyan-500 to-blue-500 mr-auto" variant="flat" color="default" radius="lg" size="sm">
                                Añadir al Carrito
                            </Button>
                        </div>
                    </CardFooter>
                </Card></SwiperSlide>
            <SwiperSlide><Card
                isFooterBlurred
                radius="lg"
                className="border-none h-[400px] flex items-center"
            >
                <Image
                    alt="Funko de Batman"
                    className="object-cover mb-11 transition-transform duration-500 ease-in-out transform hover:scale-110"
                    height={200}
                    src={FunkoEddy}
                    width={200}
                />
                <CardFooter className=" flex flex-col h-[200px] space-y-4  justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <h1 className="text-tiny text-black/80 mr-auto text-[15px]">Pop!</h1>
                    <div className='mr-auto font-medium text-[15px]'>
                        <p className=" text-black/80 ">Funko de Eddy</p>
                        <p className=" text-black/80 ">Stranger Things</p>
                    </div>
                    <p className=" text-black/80 mr-auto text-[17px]" > s/62.00</p>
                    <div>
                        <Button className="text-[14px] font-medium  w-[180px] text-white bg-gradient-to-r from-cyan-500 to-blue-500 mr-auto" variant="flat" color="default" radius="lg" size="sm">
                            Añadir al Carrito
                        </Button>
                    </div>
                </CardFooter>
            </Card></SwiperSlide>
            <SwiperSlide><Card
                isFooterBlurred
                radius="lg"
                className="border-none h-[400px] flex items-center"
            >
                <Image
                    alt="Funko de Batman"
                    className="object-cover mb-11 transition-transform duration-500 ease-in-out transform hover:scale-110"
                    height={200}
                    src={FunkoEddy}
                    width={200}
                />
                <CardFooter className=" flex flex-col h-[200px] space-y-4  justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <h1 className="text-tiny text-black/80 mr-auto text-[15px]">Pop!</h1>
                    <div className='mr-auto font-medium text-[15px]'>
                        <p className=" text-black/80 ">Funko de Eddy</p>
                        <p className=" text-black/80 ">Stranger Things</p>
                    </div>
                    <p className=" text-black/80 mr-auto text-[17px]" > s/62.00</p>
                    <div>
                        <Button className="text-[14px] font-medium  w-[180px] text-white bg-gradient-to-r from-cyan-500 to-blue-500 mr-auto" variant="flat" color="default" radius="lg" size="sm">
                            Añadir al Carrito
                        </Button>
                    </div>
                </CardFooter>
            </Card></SwiperSlide>
            <SwiperSlide><Card
                isFooterBlurred
                radius="lg"
                className="border-none h-[400px] flex items-center"
            >
                <Image
                    alt="Funko de Batman"
                    className="object-cover mb-11 transition-transform duration-500 ease-in-out transform hover:scale-110"
                    height={200}
                    src={FunkoEddy}
                    width={200}
                />
                <CardFooter className=" flex flex-col h-[200px] space-y-4  justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <h1 className="text-tiny text-black/80 mr-auto text-[15px]">Pop!</h1>
                    <div className='mr-auto font-medium text-[15px]'>
                        <p className=" text-black/80 ">Funko de Eddy</p>
                        <p className=" text-black/80 ">Stranger Things</p>
                    </div>
                    <p className=" text-black/80 mr-auto text-[17px]" > s/62.00</p>
                    <div>
                        <Button className="text-[14px] font-medium  w-[180px] text-white bg-gradient-to-r from-cyan-500 to-blue-500 mr-auto" variant="flat" color="default" radius="lg" size="sm">
                            Añadir al Carrito
                        </Button>
                    </div>
                </CardFooter>
            </Card></SwiperSlide>
            <SwiperSlide><Card
                isFooterBlurred
                radius="lg"
                className="border-none h-[400px] flex items-center"
            >
                <Image
                    alt="Funko de Batman"
                    className="object-cover mb-11 transition-transform duration-500 ease-in-out transform hover:scale-110"
                    height={200}
                    src={FunkoEddy}
                    width={200}
                />
                <CardFooter className=" flex flex-col h-[200px] space-y-4  justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <h1 className="text-tiny text-black/80 mr-auto text-[15px]">Pop!</h1>
                    <div className='mr-auto font-medium text-[15px]'>
                        <p className=" text-black/80 ">Funko de Eddy</p>
                        <p className=" text-black/80 ">Stranger Things</p>
                    </div>
                    <p className=" text-black/80 mr-auto text-[17px]" > s/62.00</p>
                    <div>
                        <Button className="text-[14px] font-medium  w-[180px] text-white bg-gradient-to-r from-cyan-500 to-blue-500 mr-auto" variant="flat" color="default" radius="lg" size="sm">
                            Añadir al Carrito
                        </Button>
                    </div>
                </CardFooter>
            </Card></SwiperSlide>
            <SwiperSlide><Card
                isFooterBlurred
                radius="lg"
                className="border-none h-[400px] flex items-center"
            >
                <Image
                    alt="Funko de Batman"
                    className="object-cover mb-11 transition-transform duration-500 ease-in-out transform hover:scale-110"
                    height={200}
                    src={FunkoEddy}
                    width={200}
                />
                <CardFooter className=" flex flex-col h-[200px] space-y-4  justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <h1 className="text-tiny text-black/80 mr-auto text-[15px]">Pop!</h1>
                    <div className='mr-auto font-medium text-[15px]'>
                        <p className=" text-black/80 ">Funko de Eddy</p>
                        <p className=" text-black/80 ">Stranger Things</p>
                    </div>
                    <p className=" text-black/80 mr-auto text-[17px]" > s/62.00</p>
                    <div>
                        <Button className="text-[14px] font-medium  w-[180px] text-white bg-gradient-to-r from-cyan-500 to-blue-500 mr-auto" variant="flat" color="default" radius="lg" size="sm">
                            Añadir al Carrito
                        </Button>
                    </div>
                </CardFooter>
            </Card></SwiperSlide>
            <SwiperSlide><Card
                isFooterBlurred
                radius="lg"
                className="border-none h-[400px] flex items-center"
            >
                <Image
                    alt="Funko de Batman"
                    className="object-cover mb-11 transition-transform duration-500 ease-in-out transform hover:scale-110"
                    height={200}
                    src={FunkoEddy}
                    width={200}
                />
                <CardFooter className=" flex flex-col h-[200px] space-y-4  justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <h1 className="text-tiny text-black/80 mr-auto text-[15px]">Pop!</h1>
                    <div className='mr-auto font-medium text-[15px]'>
                        <p className=" text-black/80 ">Funko de Eddy</p>
                        <p className=" text-black/80 ">Stranger Things</p>
                    </div>
                    <p className=" text-black/80 mr-auto text-[17px]" > s/62.00</p>
                    <div>
                        <Button className="text-[14px] font-medium  w-[180px] text-white bg-gradient-to-r from-cyan-500 to-blue-500 mr-auto" variant="flat" color="default" radius="lg" size="sm">
                            Añadir al Carrito
                        </Button>
                    </div>
                </CardFooter>
            </Card></SwiperSlide>

        </Swiper>
    );
}

export default SliderProductosSimilares