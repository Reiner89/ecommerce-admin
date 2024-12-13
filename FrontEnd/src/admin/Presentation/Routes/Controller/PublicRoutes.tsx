import { useContext } from "react";
import { AuthContext } from "../../Context/Auth/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoutes = () => {
  // Auth Context
  const { auth } = useContext(AuthContext);

  // Si no esta autenticado
  if (auth.logged) return <Navigate to="/admin/profile" replace />;

  return <Outlet />;
};
