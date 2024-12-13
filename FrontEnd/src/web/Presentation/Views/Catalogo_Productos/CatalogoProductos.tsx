import Seccion_productos from "./Productos/Seccion_productos";
import Sidebar_Productos from "./Sidebar_Productos/Sidebar_productos";
function CatalagoProductos() {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="flex space-x-4">
        <Sidebar_Productos />
        <Seccion_productos />
      </div>
    </div>
  );
}

export default CatalagoProductos;
