const poll = require("../Database/config");

const getCategorias = async (_req, res) => {
  try {
    const [result] = await poll.query(
      "SELECT id_categoria, nombre_categoria FROM Categoria"
    );

    res.json({
      ok: true,
      categorias: result,
    });
  } catch (error) {
    console.log("Error al obtener las categorias", error);

    res.status(500).json({
      ok: false,
      msg: "Error al obtener las categorias",
    });
  }
};

const createCategoria = async (req, res) => {
  try {
    const { nombre } = req.body;

    const [result] = await poll.query(
      "INSERT INTO Categoria (nombre_categoria) VALUES (?)",
      [nombre]
    );

    res.json({ ok: true, msg: "Categoria creada" });
  } catch (error) {
    console.log("Error al crear la categoria", error);

    res.status(500).json({
      ok: false,
      msg: "Error al crear la categoria",
    });
  }
};

module.exports = { getCategorias, createCategoria };
