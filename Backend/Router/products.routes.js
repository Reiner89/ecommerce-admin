const { Router } = require("express");
const multer = require("multer");
const { validarJWT } = require("../Middleware/Validar-Token");
const {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../Controller/productos.controller");
const processImages = require("../Middleware/upload-image");

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

// Obtener productos
router.get("/", getProducts);

// Crear productos
router.post(
  "/new",
  validarJWT,
  upload.array("imagenProducto", 4),
  processImages,
  createProduct
);

// Actualizar productos
router.put("/:id", validarJWT, updateProduct);

// Eliminar productos
router.delete("/:id", validarJWT, deleteProduct);

module.exports = router;
