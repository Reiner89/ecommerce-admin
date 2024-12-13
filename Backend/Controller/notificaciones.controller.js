const poll = require("../Database/config");

const obtenerNotificaciones = async (req, res) => {
  // Vemos el id que retorno despues de verificar el token
  const myId = req.id;

  try {
    const [result] = await poll.query(
      `SELECT
          id_notificacion,
          visto_notificacion,
          id_usuario_emisor_notificacion,
          id_usuario_receptor_notificacion,
          titulo_notificacion,
          mensaje_notificacion,
          fecha_vigencia_notificacion,
          fecha_creado
        FROM
          Notificaciones
        WHERE
          id_usuario_receptor_notificacion = ?
        ORDER BY
          fecha_creado DESC
        LIMIT 30`,
      [myId]
    );

    res.json({
      ok: true,
      notificaciones: result,
    });
  } catch (error) {
    console.log(
      "Error al obtener las notificaciones ObtenerNotificaciones: ",
      error
    );
    res.status(500).json({
      ok: false,
      message: "Error al obtener las notificaciones",
    });
  }
};

module.exports = { obtenerNotificaciones };
