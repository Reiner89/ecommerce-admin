const poll = require("../Database/config");

const getSubCategorias = async (req, res) => {
  try {
    const { id } = req.params;

    if (id) {
      const [result] = await poll.query(
        "SELECT id_subcategoria, nombre_subcategoria FROM SubCategoriaProducto WHERE id_categoria = ?",
        [id]
      );

      res.json({
        ok: true,
        subcategorias: result,
      });
    } else {
      const [result] = await poll.query(
        "SELECT id_subcategoria, nombre_subcategoria FROM SubCategoriaProducto"
      );

      res.json({
        ok: true,
        subcategorias: result,
      });
    }
  } catch (error) {
    console.log("Error al obtener las subcategorias", error);

    res.status(500).json({
      ok: false,
      msg: "Error al obtener las subcategorias",
    });
  }
};

const createSubCategoria = async (req, res) => {
  try {
    const { nombre, id } = req.body;
    const [result] = await poll.query(
      "INSERT INTO SubCategoriaProducto (nombre_subcategoria, id_categoria) VALUES (?, ?)",
      [nombre, id]
    );

    res.json({
      ok: true,
      msg: "Subcategoria creada",
    });
  } catch (error) {
    console.log("Error al crear la subcategoria", error);

    res.status(500).json({
      ok: false,
      msg: "Error al crear la subcategoria",
    });
  }
};

module.exports = { getSubCategorias, createSubCategoria };
