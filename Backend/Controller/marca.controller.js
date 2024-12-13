const poll = require("../Database/config");

const getMarcas = async (req, res) => {
  // Si hay id de subcategoria, obtenemos las marcas de esa subcategoria
  try {
    const { id } = req.params;

    if (id) {
      const [result] = await poll.query(
        "SELECT id_marca, nombre_marca FROM MarcaProducto WHERE id_subcategoria = ?",
        [id]
      );

      res.json({
        ok: true,
        marcas: result,
      });
    } else {
      // Si no hay id de subcategoria, obtenemos todas las marcas
      const [result] = await poll.query(
        "SELECT id_marca, nombre_marca FROM MarcaProducto"
      );

      res.json({
        ok: true,
        marcas: result,
      });
    }
  } catch (error) {
    console.log("Error al obtener las marcas", error);

    res.status(500).json({
      ok: false,
      msg: "Error al obtener las marcas",
    });
  }
};

const createMarca = async (req, res) => {
  try {
    const { nombre, id } = req.body;

    const [result] = await poll.query(
      "INSERT INTO MarcaProducto (nombre_marca, id_subcategoria) VALUES (?, ?)",
      [nombre, id]
    );

    res.json({
      ok: true,
      msg: "Marca creada",
    });
  } catch (error) {
    console.log("Error al crear la marca", error);

    res.status(500).json({
      ok: false,
      msg: "Error al crear la marca",
    });
  }
};

module.exports = {
  getMarcas,
  createMarca,
};
