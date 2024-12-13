const { Router } = require("express");
const { validarJWT } = require("../Middleware/Validar-Token");
const { getMarcas, createMarca } = require("../Controller/marca.controller");
const { check } = require("express-validator");
const { validateSchema } = require("../Middleware/Validar-Campos");

// Inicializamos el router de marcas
const router = Router();

// Obtener marcas
router.get("/:id?", getMarcas);

// Crear marcas
router.post(
  "/new",
  validarJWT,
  [
    check("nombre", "El nombre de la marca es obligatorio").not().isEmpty(),
    validateSchema,
  ],
  createMarca
);

module.exports = router;
