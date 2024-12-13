const { Router } = require("express");
const { validarJWT } = require("../Middleware/Validar-Token");
const {
  obtenerNotificaciones,
} = require("../Controller/notificaciones.controller");

// Inicializamos el router de mensajes.
const router = Router();

router.get("/:de", validarJWT, obtenerNotificaciones);

module.exports = router;
