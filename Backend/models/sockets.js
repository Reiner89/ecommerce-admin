const {
  usuarioConectado,
  usuarioDesconectado,
  getUsuarios,
  guardarMensajes,
  guardarNotificacion,
  cambiarEstadoNotificacion,
} = require("../Controller/socketsController");
const { comprobarJWT } = require("../Helper/jwt");

// 0) Creamos una clase de los sockets
class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    // 1) Se crea la conexion
    this.io.on("connection", async (socket) => {
      console.log("Cliente conectado");

      // 7) Evaluo el token enviado a traves del query
      const token = socket.handshake.query["token-storage"];

      // 8) Saber que usuario esta activo a traves del token
      const [response, id] = comprobarJWT(token);

      console.log("Comprobar JWT del Socket: ", response, id);

      // 9) Validar JWT, Si el token no es valido, desconectamos
      if (!response) {
        console.log("Token no valido desde el Socket");
        return socket.disconnect();
      }

      // 3) Usuario conectado (true)
      await usuarioConectado(id);

      // 1.a) Creamos una sala personal con el id del cliente conectado
      socket.join(id);

      // 10) Escuchar cuando el cliente manda un mensaje personal
      socket.on("mensaje-personal", async (message) => {
        console.log("Mensaje Personal Socket", message);
        // 11) Guardar mensaje
        const mensaje = await guardarMensajes(message);
        console.log("Mensaje Guardado Socket", mensaje);

        // 12) Se lo emitimos a la persona
        this.io.to(message.para).emit("mensaje-personal", mensaje);
        this.io.to(message.de).emit("mensaje-personal", mensaje);
      });

      // 10.b) Escuchar cuando el cliente manda una notificación a muchos
      socket.on("notificacion-multiple", async (notificacion) => {
        console.log("Notificación a varias personas", notificacion);

        // Creamos la notificación
        const notificacionesGuardadas = [];

        for (const destinatarioId of notificacion.destinatarios) {
          // Crear notificación
          const nuevaNotificacion = {
            id_usuario_emisor_notificacion: notificacion.de,
            id_usuario_receptor_notificacion: destinatarioId,
            titulo_notificacion: notificacion.titulo,
            mensaje_notificacion: notificacion.mensaje,
            fecha_vigencia_notificacion: notificacion.fecha_vigencia,
            fecha_creado: new Date(),
          };

          // Guardar la notificación en la base de datos
          const notificacionGuardada = await guardarNotificacion(
            nuevaNotificacion
          );
          notificacionesGuardadas.push(notificacionGuardada);

          console.log("Notificación Guardada", notificacionGuardada);

          // Emitir la notificación a cada destinatario
          this.io
            .to(destinatarioId)
            .emit("nueva-notificacion", notificacionGuardada);
        }
      });

      // Escuchar el evento de marcar una notificación como leída
      socket.on(
        "notificacion-vista",
        async ({ idNotificacion, nuevoEstado }) => {
          console.log("Notificación leída", idNotificacion, nuevoEstado);

          const resultado = await cambiarEstadoNotificacion(
            idNotificacion,
            nuevoEstado
          );

          if (resultado.success) {
            // Emitir el cambio de estado a quien corresponda (opcional)
            this.io.to(socket.id).emit("notificacion-cambiada", {
              idNotificacion,
              nuevoEstado,
            });
          }
        }
      );

      // ATENCION AL CLIENTE
      socket.on("producto-creado", async () => {
        try {
          // Ejecutar obtener productos
          // Emitir a los usuarios conectados
        } catch (error) {
          console.log("Error al obtener los productos", error);
        }
      });

      // 6) Emitir a los usuarios conectados
      this.io.emit("usuarios-conectados", await getUsuarios());

      // 2) Desconectar usuario
      socket.on("disconnect", async () => {
        // 4) Usuario desconectado (false)
        await usuarioDesconectado(id);
        // 5) Al momento de desconectarse es importante volver a poner esto, para que los usuarios conectados se actualizen
        this.io.emit("usuarios-conectados", await getUsuarios());
      });
    });
  }
}

module.exports = Sockets;
