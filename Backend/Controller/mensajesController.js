const poll = require("../Database/config");

const obtenerChat = async (req, res) => {
  // Vemos el id que retorno despues de verificar el token
  const myId = req.id;

  // Vemos que usuario dispara el mensaje
  const mensajeDe = req.params.de;

  try {
    const [result] = await poll.query(
      `SELECT 
          id_mensaje_usuario, id_mensaje_para, id_mensaje_desde, mensaje_usuario, mensaje_fecha
        FROM 
          Mensajes
        WHERE 
          (id_mensaje_para = ? AND id_mensaje_desde = ?) 
          OR 
          (id_mensaje_para = ? AND id_mensaje_desde = ?)
        ORDER BY 
          mensaje_fecha ASC
        LIMIT 30`,
      [myId, mensajeDe, mensajeDe, myId]
    );

    res.json({
      ok: true,
      mensajes: result,
    });
  } catch (error) {
    console.log("Error al obtener los mensajes ObtenerChat: ", error);
    res.status(500).json({
      ok: false,
      message: "Error al obtener los mensajes",
    });
  }
};

module.exports = {
  obtenerChat,
};
