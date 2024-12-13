const { Router } = require("express");
const { validarJWT } = require("../Middleware/Validar-Token");
const { getColores, createColor } = require("../Controller/color.controller");
const { check } = require("express-validator");
const { validateSchema } = require("../Middleware/Validar-Campos");

// Inicializamos el router de colores
const router = Router();

// Obtener colores
router.get("/", getColores);

// Crear colores
router.post(
  "/new",
  validarJWT,
  [
    check("nombre", "El nombre del color es obligatorio").not().isEmpty(),
    validateSchema,
  ],
  createColor
);

module.exports = router;
