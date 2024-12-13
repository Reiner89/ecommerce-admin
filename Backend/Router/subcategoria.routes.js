const { Router } = require("express");
const { validarJWT } = require("../Middleware/Validar-Token");
const {
  getSubCategorias,
  createSubCategoria,
} = require("../Controller/subcategoria.controller");
const { check } = require("express-validator");
const { validateSchema } = require("../Middleware/Validar-Campos");

// Inicializamos el router de subcategorias
const router = Router();

// Obtener subcategorias
router.get("/:id?", getSubCategorias);

// Crear subcategorias
router.post(
  "/new",
  validarJWT,
  [
    check("nombre", "El nombre de la subcategoria es obligatorio")
      .not()
      .isEmpty(),
    validateSchema,
  ],
  createSubCategoria
);

module.exports = router;
