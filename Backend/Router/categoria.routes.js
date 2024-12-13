const { Router } = require("express");
const { validarJWT } = require("../Middleware/Validar-Token");
const {
  getCategorias,
  createCategoria,
} = require("../Controller/categorias.controller");
const { check } = require("express-validator");
const { validateSchema } = require("../Middleware/Validar-Campos");

// Inicializamos el router de marcas
const router = Router();

// Obtener categorias
router.get("/", getCategorias);

// Crear categorias
router.post(
  "/new",
  validarJWT,
  [
    check("nombre", "El nombre de la marca es obligatorio").not().isEmpty(),
    validateSchema,
  ],
  createCategoria
);

module.exports = router;
