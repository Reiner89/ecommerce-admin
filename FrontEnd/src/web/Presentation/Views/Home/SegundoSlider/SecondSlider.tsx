import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import Slider1 from './Slider1/Slider1';
import Slider2 from './Slider2/Slider2';
import Slider3 from './Slider3/Slider3';
export default function SecondSlider() {
    return (
      <>
        <Swiper
          scrollbar={{
            hide: true,
          }}
          loop={true}
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Slider1 />
          </SwiperSlide>
          <SwiperSlide>
            <Slider2 />
          </SwiperSlide>
          <SwiperSlide>
            <Slider3 />
          </SwiperSlide>
       
        </Swiper>
      </>
    );
  }
  