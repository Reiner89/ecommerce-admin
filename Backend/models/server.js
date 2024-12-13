// Servidor de Express
// Modulos a usar
const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const CORS = require("cors");
// const path = require("path");

// Archivos y carpetas del proyecto
const Sockets = require("./sockets");
const usuarios = require("../Router/auth.routes");
const mensajes = require("../Router/mensaje.routes");
const notificaciones = require("../Router/notificaciones.routes");
const productos = require("../Router/products.routes");
const categorias = require("../Router/categoria.routes");
const subcategorias = require("../Router/subcategoria.routes");
const marcas = require("../Router/marca.routes");
const colores = require("../Router/color.routes");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;

    // Http server
    this.server = http.createServer(this.app);

    // Configuraciones de sockets
    this.io = socketio(this.server, {
      /* configuraciones */
    });
  }

  middlewares() {
    // Habilitamos CORS
    this.app.use(CORS());

    //  Parsea el body en formato JSON
    this.app.use(express.json());

    // Servimos la carpeta dist
    // this.app.use(express.static(path.join(__dirname, "../../FrontEnd/dist")));

    // EndPoints de nuestra API
    this.app.use("/api/auth", usuarios);
    this.app.use("/api/mensajes", mensajes);
    this.app.use("/api/notificaciones", notificaciones);
    this.app.use("/api/productos", productos);
    this.app.use("/api/categorias", categorias);
    this.app.use("/api/subcategorias", subcategorias);
    this.app.use("/api/marcas", marcas);
    this.app.use("/api/colores", colores);

    // Ruta para manejar todas las demás solicitudes y servir el archivo HTML de React
    // this.app.get("*", (req, res) => {
    //   res.sendFile(path.join(__dirname, "../../FrontEnd/dist/index.html"));
    // });
  }

  // Esta configuración se puede tener aquí o como propieda de clase
  // depende mucho de lo que necesites
  configurarSockets() {
    new Sockets(this.io);
  }

  execute() {
    // Inicializar Middlewares
    this.middlewares();

    // Inicializar sockets
    this.configurarSockets();

    // Inicializar Server
    this.server.listen(this.port, () => {
      console.log("Server corriendo en puerto:", this.port);
    });
  }
}

module.exports = Server;
