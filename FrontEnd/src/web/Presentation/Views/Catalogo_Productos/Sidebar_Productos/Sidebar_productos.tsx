import AcordionMarca from "../Acordiones/AcordionMarca/AcordionMarca";
import AcordionPrecio from "../Acordiones/AcordionPrecio/AcordionPrecio";
import AcordionCalificacion from "../Acordiones/AcordionCalificacion/AcordionCalificacion";
import AcordionGeneracion from "../Acordiones/AcordionGeneracion/AcordionGeneracion";
function Sidebar_Productos() {
  return (
    <aside className="w-1/4 bg-white p-5 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Accesorios</h2>
      <p className="text-sm text-gray-600 mb-2">Relojes</p>
      <p className="text-sm text-gray-600 mb-6">Resultados (221163)</p>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Envío a domicilio</h3>
        <button className="bg-green-100 text-green-800 px-3 py-1 rounded">
          Llega mañana
        </button>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Retiro en un punto</h3>
        <button className="bg-green-100 text-green-800 px-3 py-1 rounded">
          Retira mañana
        </button>
      </div>

      <div className="mb-2">
        <AcordionMarca />
      </div>
      <div className="mb-2">
        <AcordionPrecio />
      </div>
      <div className="mb-2">
        <AcordionCalificacion />
      </div>
      <div className="mb-2">
        <AcordionGeneracion />
      </div>
    </aside>
  );
}

export default Sidebar_Productos;
