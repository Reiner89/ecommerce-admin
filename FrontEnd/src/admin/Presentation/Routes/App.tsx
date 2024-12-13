import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../Views";
import { appConfig } from "./AppConfig";
import { ProtectedRoutes, PublicRoutes } from "./Controller";
import { AuthContext } from "../Context/Auth/AuthContext";
import { useContext, useEffect } from "react";
import { Loading } from "../Components";
import moment from "moment";
import "moment/locale/es";
import { AppWeb } from "../../../web/App";
moment.locale("es");

export const App = () => {
  // // Auth Context
  const { auth, verifyTokenRequest, responseToken } = useContext(AuthContext);

  useEffect(() => {
    verifyTokenRequest();
  }, [verifyTokenRequest, responseToken]);

  // // Checking en true
  if (auth.checking) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas Publicas */}
        <Route element={<PublicRoutes />}>
          <Route path="/admin/login" element={<Login />} />
          <Route path="*" element={<AppWeb />} />
        </Route>

        {/* Rutas Protegidas */}
        <Route element={<ProtectedRoutes />}>
          {appConfig.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

// ESTRUCTURAR POR SECCIONES LA APP EN EL MODULO COMERCIAL
// ENVIOS GRATIS (PRIMERA SECCION)
// IMAGEN ECOMMERCE (SEGUNDA SECCION)
// DEL 8 AL 17 DE DICIEMBRE (TERCERA SECCION)
// LO ULTIMO EN MODA (CUARTA SECCION CON SUBIDA DE IMAGENES)
// TENER EN CUENTA QUE SON 11 MODULOS
