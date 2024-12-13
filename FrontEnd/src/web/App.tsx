import ConfigCuenta from "./Presentation/Views/NavBar/MenuUsuario/Sectores/ConfiguraciónCuenta/ConfigCuenta";
import { Routes, Route } from "react-router-dom";
import BarraNavegadora from "./Presentation/Views/NavBar/BarraNavegadora";
import Footer from "./Presentation/Views/Footer/Footer";
import Home from "./Presentation/Views/Home/Home";
import DetalledeProducto from "./Presentation/Views/DetalledeProducto/DetalledeProducto";
import CatalagoProductos from "./Presentation/Views/Catalogo_Productos/CatalogoProductos";
import Paris_Texas from "./Presentation/Views/Bot/Paris_Texas";
import ProtectedRoute from "./components/ProtectedRoute/ProtegerRutas";
import CarritoComprasActivo from "./Presentation/Views/CarritodeCompras/Vistas/CarritodeCompras/CarritoComprasActivo";
import CarritodeCompras from "./Presentation/Views/CarritodeCompras/Vistas/CarritodeCompras";

export const AppWeb = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <BarraNavegadora />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/descripcion" element={<DetalledeProducto />} />
            <Route path="/lista-productos" element={<CatalagoProductos />} />
            <Route path="/carrito-compras" element={<CarritodeCompras />} />
            <Route
              path="/carrito-compras-activo"
              element={<CarritoComprasActivo />}
            />
            <Route
              path="/mi-cuenta/configcuenta"
              element={<ProtectedRoute element={<ConfigCuenta />} />}
            />
          </Routes>
        </div>

        <Footer />

        <div className="fixed bottom-4 right-4 z-50">
          <Paris_Texas />
        </div>
      </div>
    </>
  );
};
