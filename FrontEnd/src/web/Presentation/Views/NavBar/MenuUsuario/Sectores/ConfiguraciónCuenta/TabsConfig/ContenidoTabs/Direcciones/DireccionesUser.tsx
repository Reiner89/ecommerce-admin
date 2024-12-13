import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { MdDeleteForever } from "react-icons/md";
import NuevaDireccion from './AñadirDireccion/NuevaDireccion';
import { Button } from '@nextui-org/react';
import EditarDireccion from './EditarDireccion/EditarDireccion';
function DireccionesUser() {

  return (
    <div>
      <div className="py-[20px] space-y-8">
        <h1 className="text-[20px] font-thin">Direcciones</h1>
      </div>
      <div className=' h-[300px] b'>
        <div className='px-[2%] bg-[#d4dbdb] rounded-md h-[50px] flex items-center'>
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            sx={{
              color: '#ff5722',
              '&.Mui-checked': {
                color: '#ff4081',
              },
            }}
          />
          <h1 className='text-[14px]'>341, avenida san cristobal, rimac, lima, lima </h1>
          <div className='flex ml-auto space-x-3 '>

           
               <EditarDireccion/> 
              <Button><MdDeleteForever size={20} /></Button>
              
           

          </div>
        </div>
      </div>
      <div className='h-[60px]  flex items-center'>
        <NuevaDireccion />

      </div>
    </div>
  );
}

export default DireccionesUser;
