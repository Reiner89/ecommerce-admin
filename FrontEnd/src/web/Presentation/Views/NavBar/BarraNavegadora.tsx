import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { SearchIcon } from "../../Components/Icons/IconsE-commerce";
import LogoEcommerce from "../../../assets/Img/Logo_E-commerce.webp";
import { grey, blue } from "@mui/material/colors";
import FlagModal from "./Iconos/FlagModal ";
import { Outlet, Link } from "react-router-dom";
import Barra_extra1 from "./SectoresAdicionales/Barra_extra1";
import Banner1 from "./SectoresAdicionales/Banner1";
import InicioSesion from "./Login/InicioSesión";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Sidebar from "../SideBar/Sidebar2";
import { useAuth } from "../../../components/ManejoUsuario/IniciarSesión/AuthContext";
import MenuUsuario from "./MenuUsuario/MenuGeneral/MenuUsuario";
const BarraNavegadora = () => {
  const { isAuthenticated } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flag, setFlag] = useState("https://flagcdn.com/w320/pe.png");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSelectCountry = (selectedFlag: string) => {
    setFlag(selectedFlag);
    handleCloseModal();
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    setIsMenuOpen(false);
  };


  return (
    <div className="relative">
      <div>
        <Barra_extra1 />
      </div>



      <section className="flex items-center justify-center space-x-10 h-[120px] bg-black">
        <div className="flex relative left-[10%]">

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleSidebar}
            sx={{ color: "white", transition: "transform 0.3s ease" }}
            className={`transform ${isMenuOpen ? "rotate-180" : "rotate-0"}`}
          >
            {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>


          <div className="relative w-[120px] h-full ml-[20px]">
            <Link to="/" className="block relative z-10">
              <img
                className="h-[70px] w-full object-contain"
                src={LogoEcommerce}
                alt="logo principal"
              />
            </Link>
          </div>
        </div>


        <div className="w-[50%] relative">
          <Input
            label="Buscar"
            isClearable
            radius="lg"
            classNames={{
              label: "text-black dark:text-white/90 font-bold",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-[#707070]",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "hover:bg-default-200/70",
                "w-[80%]",
                "ml-[20%]",
              ],
            }}
            placeholder="Escribe lo que buscas..."
            startContent={
              <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>


        <div className="flex gap-4 items-center">
          {isAuthenticated ? (
            <>
              <MenuUsuario />
            </>
          ) : (
            <InicioSesion />
          )}
          <Button
            className="bg-transparent rounded-none border-1 border-[#fdfdfd] border-t-0 border-b-0"
            onClick={handleOpenModal}
          >
            <img className="w-[50px] h-[30px]" src={flag} alt="Bandera" />
          </Button>
          <FlagModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onSelect={handleSelectCountry}
          />
          <Link to="/carrito-compras">
            <ShoppingCartIcon
              sx={{
                color: grey[500],
                fontSize: 35,
                transition: "color 0.4s ease",
                "&:hover": {
                  color: blue[500],
                },
              }}
            />
          </Link>
        </div>
      </section>
      <div>
        <Banner1 />
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={handleCloseSidebar}
        />
      )}


      <div
        className={`fixed top-0 left-0 w-[1290px] z-50 transform transition-transform duration-300 overflow-y-hidden overflow-x-hidden ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <Sidebar onClose={handleCloseSidebar} />
      </div>

      <Outlet />
    </div>
  );
};

export default BarraNavegadora;
