import { Button } from '@nextui-org/react';
import wallpaper_navidad from '../../../../assets/Img/NavBar/Banner1/wallpaper_navidad.webp';

const Banner1 = () => {
  return (
    <div
      className="w-full h-[60px] md:h-[80px] flex items-center justify-between px-4 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${wallpaper_navidad})`,
      }}
    >
      
      <div className="flex items-center gap-4 text-white text-xs md:text-sm">
        <span className="whitespace-nowrap">
          Del <strong>8</strong> al <strong>17</strong> de diciembre
        </span>

        <div className="bg-gradient-to-r from-cyan-100/80 to-[#a0e1f3]/80 h-auto rounded-lg flex items-center px-4 py-1">
          <span className="bg-[#2c70e5] text-green-900 px-2 py-1 rounded-md font-bold text-[10px] md:text-[12px] text-center">
            TE REGALAMOS UN CUPÓN DE S/15
          </span>

          <span className="text-[10px] md:text-[12px] pl-4 whitespace-nowrap">
            por cada S/100 de compra en vestuario, calzado, accesorios y más
          </span>
        </div>
      </div>

      {/* Botón del lado derecho */}
      <div className="flex items-center">
        <Button
          className="bg-white text-green-900 font-semibold px-4 py-1 rounded-md text-sm md:text-base"
        >
          ¡Ir a comprar!
        </Button>
      </div>
    </div>
  );
};

export default Banner1;
