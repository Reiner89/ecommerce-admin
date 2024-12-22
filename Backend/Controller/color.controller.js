const poll = require("../Database/config");

const getColores = async (req, res) => {
  try {
    const [result] = await poll.query("SELECT * FROM Color");

    res.json({ ok: true, colores: result });
  } catch (error) {
    console.log("Error al obtener los colores", error);

    res.status(500).json({
      ok: false,
      msg: "Error al obtener los colores",
    });
  }
};

const createColor = async (req, res) => {
  try {
    const { nombre } = req.body;

    const [result] = await poll.query(
      "INSERT INTO Color (nombre_color) VALUES (?)",
      [nombre]
    );

    res.json({ ok: true, msg: "Color creado" });
  } catch (error) {
    console.log("Error al crear el color", error);

    res.status(500).json({
      ok: false,
      msg: "Error al crear el color",
    });
  }
};

module.exports = { getColores, createColor };
