import * as React from "react";
import LogoBymaVe from "../../../assets/Logo.webp";
import { AuthContext } from "../../Context/Auth/AuthContext";
import { Toaster } from "sonner";
import { inputL, labelL } from "../../Styles/Actions";

export const Login = () => {
  // Auth Context
  const { LoginRequest } = React.useContext(AuthContext);

  // Estado del formulario
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  // Capturamos los inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Enviar el formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Prevenimos la recarga
    e.preventDefault();

    // Realizamos la peticion
    await LoginRequest(form);
  };

  return (
    <>
      <Toaster richColors position="bottom-right" />
      <div className="relative flex items-center w-full h-[100vh] min-h-[100vh] bg-white bg-gradient-to-bl from-gray-800 via-gray-700 to-gray-800 lg:bg-none">
        <div className="container w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] flex mx-auto px-6">
          <div className="flex flex-wrap w-full">
            <div className="form w-full flex flex-col py-6 px-6 mx-auto md:w-[58.333333%] lg:w-[41.666667%] lg:mx-0 xl:w-1/3 xl:flex-[0_0_auto]">
              <div className="header-form">
                <h4 className="relative text-2xl text-white lg:text-[#344767] leading-snug font-bold mb-2 transition-all duration-300">
                  Bienvenido
                </h4>
                <p className="text-base leading-7 text-gray-400 lg:text-[rgb(103,116,142)] font-normal transition-all duration-300">
                  Ingresa tu correo y contraseña para iniciar sesión
                </p>
              </div>
              <div className="body-form py-6 transition-all duration-300">
                <form onSubmit={handleSubmit} className="flex flex-col">
                  <div className="relative mb-6">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className={inputL}
                      placeholder=" "
                      required
                      onChange={handleInputChange}
                      value={form.email}
                    />
                    <label htmlFor="email" className={labelL}>
                      Correo Electrónico
                    </label>
                  </div>
                  <div className="relative mb-6">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className={inputL}
                      placeholder=" "
                      required
                      onChange={handleInputChange}
                      value={form.password}
                    />
                    <label htmlFor="password" className={labelL}>
                      Contraseña
                    </label>
                  </div>
                  <div className="button-container">
                    <button className="relative w-full text-white font-semibold bg-gray-500 hover:shadow- shadow-[0_4px_7px_-1px_rgba(0,0,0,.11),0_2px_4px_-1px_rgba(0,0,0,.07)] px-16 py-3.5 rounded-lg motion-safe:hover:scale-105 transition-all duration-300">
                      Iniciar Sesión
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="container hidden absolute top-0 right-0 w-[50%] h-full flex-[0_0_auto] flex-col justify-center pl-3 lg:flex">
              <div className="container-derecho h-full flex flex-col justify-center bg-gradient-to-bl from-gray-800 via-gray-700 to-gray-800 rounded-xl px-24 m-4 transition-all duration-300">
                <div className="container-logo flex justify-center items-center min-h-[200px]">
                  <img
                    src={LogoBymaVe}
                    alt="LogoByma-VE"
                    className="relative w-full max-w-[350px]"
                  />
                </div>
                <h1 className="relative text-2xl text-white text-center tracking-tighter font-bold mt-12 mb-2 transition-all duration-300">
                  "Tu viaje comienza aquí"
                </h1>
                <p className="relative text-base leading-relaxed text-white text-center">
                  Así como se necesita una empresa para sostener un producto, se
                  necesita una comunidad para sostener un protocolo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
