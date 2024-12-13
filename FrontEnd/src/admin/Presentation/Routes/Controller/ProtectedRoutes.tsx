import { useContext } from "react";
import { AuthContext } from "../../Context/Auth/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  // Auth Context
  const { auth } = useContext(AuthContext);

  // Si no esta autenticado que navege al login
  if (!auth.logged) return <Navigate to="/admin/login" replace />;

  // Si lo esta que navege en las rutas protegidas
  return <Outlet />;
};
