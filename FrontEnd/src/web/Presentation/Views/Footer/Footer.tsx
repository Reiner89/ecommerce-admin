import LogoBymave from "../../../assets/Img/Logo_E-commerce.webp";
import { RiWhatsappLine } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
function Footer() {
    return (
        <div>
            <footer className="bg-black text-white">

                <div className="flex flex-col md:flex-row items-center justify-between p-6 ">
                    <div className="flex items-center space-x-4">
                        <img
                            src={LogoBymave}
                            alt="Funko Logo"
                            className="w-24"
                        />
                        <div>
                            
                            <p className="text-lg font-bold ">
                                Se el primero en enterarte de nuestros productos
                            </p>
                        </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex space-x-2">
                        <input
                            type="email"
                            placeholder="Tu correo electronico"
                            className="p-2 rounded-md w-72 text-black"
                        />
                        <button className="bg-white text-black font-bold p-2 rounded-md">
                            SUSCRIBETE
                        </button>
                    </div>
                    <div className="flex mt-4 md:mt-0 space-x-4">
                        <a href="#" className="text-2xl">
                            <RiWhatsappLine />
                        </a>
                        <a href="#" className="text-2xl">
                            <FaFacebookSquare />
                        </a>
                        <a href="#" className="text-2xl">
                            <CiTwitter />
                        </a>
                        <a href="#" className="text-2xl">
                            <FaInstagram />
                        </a>
                        <a href="#" className="text-2xl">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>


                <div className="bg-gray-100 text-black flex items-center justify-center ">
                    <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left  justify-center w-[80%] ">
                        <div>
                            <h3 className="font-bold">MI CUENTA</h3>
                            <ul className="mt-2 space-y-1">
                                <li><a href="#" className="text-sm">Order History</a></li>
                                <li><a href="#" className="text-sm">Descuentos de Estudiantes</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold">CONTACTANOS</h3>
                            <ul className="mt-2 space-y-1">
                                <li><a href="#" className="text-sm">Centro de Soporte</a></li>
                                <li><a href="#" className="text-sm">Twitter</a></li>
                                <li><a href="#" className="text-sm">Facebook</a></li>
                                <li><a href="#" className="text-sm">Instagram</a></li>
                                <li><a href="#" className="text-sm">Youtube</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold">ASISTENCIA</h3>
                            <ul className="mt-2 space-y-1">
                                <li><a href="#" className="text-sm">FAQs</a></li>
                                <li><a href="#" className="text-sm">Returns Policy</a></li>
                                <li><a href="#" className="text-sm">Politicas de Cancelación</a></li>
                                <li><a href="#" className="text-sm">Terminos y Condiciones</a></li>
                                <li><a href="#" className="text-sm">Privacidad & Cookies</a></li>
                                <li><a href="#" className="text-sm">Delivery & Shipping Information</a></li>
                                <li><a href="#" className="text-sm">Brand Directory</a></li>
                                <li><a href="#" className="text-sm">Cookie Preferences</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold">SOBRE NOSOTROS</h3>
                            <ul className="mt-2 space-y-1">
                                <li><a href="#" className="text-sm">Corporate Governance</a></li>
                                <li><a href="#" className="text-sm">Modern Slavery Statement</a></li>
                                <li><a href="#" className="text-sm">Packaging Environmental Labelling</a></li>
                                <li><a href="#" className="text-sm">Contact</a></li>
                                <li><a href="#" className="text-sm">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer