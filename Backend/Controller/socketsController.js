const poll = require("../Database/config");

// Cambiar el estado del usuario a conectado
const usuarioConectado = async (id) => {
  try {
    const [rows] = await poll.execute(
      "UPDATE Usuarios SET conectado = ? WHERE id_usuario = ?",
      [1, id]
    );

    if (rows.affectedRows > 0) {
      return { id, conectado: true };
    }

    return null;
  } catch (error) {
    console.log("Error al cambiar el estado del usuario a conectado:", error);
    return null;
  }
};

// Cambiar el estado del usuario a desconectado
const usuarioDesconectado = async (id) => {
  try {
    const [rows] = await poll.execute(
      "UPDATE Usuarios SET conectado = ? WHERE id_usuario = ?",
      [0, id]
    );

    if (rows.affectedRows > 0) {
      return { id, conectado: false };
    }

    return null;
  } catch (error) {
    console.log(
      "Error al cambiar el estado del usuario a desconectado:",
      error
    );
    return null;
  }
};

// Obtener todos los usuarios conectados
const getUsuarios = async () => {
  try {
    const [rows] = await poll.execute(
      "SELECT id_usuario, nombre_usuario, apellido_usuario, foto_usuario, conectado FROM Usuarios ORDER BY conectado DESC"
    );

    // console.log("Usuarios conectados:", rows);

    return rows;
  } catch (error) {
    console.log("Error al obtener los usuarios conectados:", error);
    return [];
  }
};

// Guardar los mensajes en la BD
const guardarMensajes = async (message) => {
  // Verificamos que tengan los campos necesarios (de,para,mensaje)
  if (!message.de || !message.para || !message.mensaje) {
    return false;
  }

  try {
    const [result] = await poll.execute(
      "INSERT INTO Mensajes_Usuarios (id_mensaje_desde, id_mensaje_para, mensaje_usuario) VALUES (?,?,?)",
      [message.de, message.para, message.mensaje]
    );

    return result;
  } catch (error) {
    console.log("Error al guardar el mensaje:", error);
    return false;
  }
};

// Guardar notificaciones en la BD
const guardarNotificacion = async (notificacion) => {
  // console.log("Guardando notificación desde el controlador:", notificacion);

  // Verificamos que tenga los campos necesarios
  if (
    !notificacion.id_usuario_emisor_notificacion ||
    !notificacion.id_usuario_receptor_notificacion ||
    !notificacion.titulo_notificacion ||
    !notificacion.mensaje_notificacion
  ) {
    return false;
  }

  try {
    const [result] = await poll.execute(
      "INSERT INTO Notificaciones (id_usuario_emisor_notificacion, id_usuario_receptor_notificacion, titulo_notificacion, mensaje_notificacion, fecha_vigencia_notificacion, fecha_creado) VALUES (?,?,?,?,?,?)",
      [
        notificacion.id_usuario_emisor_notificacion,
        notificacion.id_usuario_receptor_notificacion,
        notificacion.titulo_notificacion,
        notificacion.mensaje_notificacion,
        notificacion.fecha_vigencia_notificacion,
        notificacion.fecha_creado,
      ]
    );

    return result;
  } catch (error) {
    console.log("Error al guardar la notificación:", error);
    return false;
  }
};

// Cambiar el estado de la notificacion
const cambiarEstadoNotificacion = async (idNotificacion, nuevoEstado) => {
  try {
    // Actualizamos el estado de la notificación en la base de datos
    const [result] = await poll.execute(
      "UPDATE Notificaciones SET visto_notificacion = ? WHERE id_notificacion = ?",
      [nuevoEstado, idNotificacion]
    );

    // Verificar si la operación afectó alguna fila
    if (result.affectedRows > 0) {
      return {
        success: true,
        message: "Estado de la notificación actualizado correctamente",
      };
    }

    return {
      success: false,
      message: "No se encontró la notificación o no se pudo actualizar",
    };
  } catch (error) {
    console.log("Error al cambiar el estado de la notificación:", error);
    return {
      success: false,
      message: "Error al cambiar el estado de la notificación",
    };
  }
};

module.exports = {
  usuarioConectado,
  usuarioDesconectado,
  getUsuarios,
  guardarMensajes,
  guardarNotificacion,
  cambiarEstadoNotificacion,
};
