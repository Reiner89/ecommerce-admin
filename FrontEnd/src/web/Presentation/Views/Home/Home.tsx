import SeccionInicio from "./SeccionInicio/SeccionInicio";
import SeccionExclusiva from "./SeccionExclusivo/SeccionExclusiva";
import SeparadorInicio from "./SeparadorInicio/SeparadorInicio";
import { ProductosNuevosTarjetas } from "./ProductosNuevos/Productos_Nuevos_Tarjetas";
import SecondSlider from "./SegundoSlider/SecondSlider";
import Banner1 from "./Banners/Banner1/Banner1";
import BannerSplash from "./BannerSplashart/BannerSplash";
import Banner2 from "./Banners/Banner2/Banner2";
import 'swiper/css'
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
function Home() {
  return (
    <div>
      <SeccionInicio />
      <SeccionExclusiva/>
      <SeparadorInicio/>
      <ProductosNuevosTarjetas/>
      <SecondSlider/>
      <Banner1/>
      <BannerSplash/>
      <ProductosNuevosTarjetas/>
      <Banner2/>
    </div>
  )
}

export default Home