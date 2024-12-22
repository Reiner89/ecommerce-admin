import { Popover, PopoverTrigger, PopoverContent, Button, Input } from "@nextui-org/react";
import CaravanPalace from '../../../assets/Img/caravan_palace_official.webp';
import { MdAddAPhoto } from "react-icons/md";
import { FaPaperclip } from "react-icons/fa";

const Paris_Texas = () => {
    return (
        <Popover placement="right">
            <PopoverTrigger>
                <Button
                    className="p-0 rounded-full bg-transparent shadow-md hover:shadow-lg"
                    aria-label="Chatbot"
                >
                    <img
                        src={CaravanPalace}
                        alt="Chatbot Icon"
                        className="w-12 h-12 object-cover rounded-full"
                    />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="bg-gradient-to-r from-cyan-500 to-blue-500">
                <div className="px-4 py-2 h-[500px] w-[400px] p-[5%]">
                    <div className="bg-[#18cdff] h-[50px] flex flex-col p-[5%] justify-center rounded-lg">
                        <div className="text-small font-bold">Bienvenido</div>
                        <div className="text-tiny">¿En qué puedo ayudarte?</div>
                    </div>

                    

                </div>
                <div className="mt-4">
                    <div className="relative w-[380px]">
                        <Input
                             
                            type="text"
                            label="Ingresa tu consulta"
                        />
                        
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-2">
                            <MdAddAPhoto size={20} className="text-gray-500 cursor-pointer" />
                            <FaPaperclip size={20} className="text-gray-500 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default Paris_Texas;
