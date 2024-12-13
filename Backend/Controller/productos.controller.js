const poll = require("../Database/config");

const getProducts = async (req, res) => {
  try {
    const [result] = await poll.query("SELECT * FROM Productos");

    res.json({ ok: true, productos: result });
  } catch (error) {
    console.log("Error al obtener los productos", error);

    res.status(500).json({
      ok: false,
      msg: "Error al obtener los productos",
    });
  }
};

const createProduct = async (req, res) => {
  const {
    nombreProducto,
    varianteProducto,
    descripcionProducto,
    skuProducto,
    destacadoProducto,
    estadoProducto,
    fechaCreado,
    fechaActualizado,
    id_creador_producto,
    id_color,
    id_categoria,
    id_subcategoria,
    id_marca,
    cantSerialesProducto,
  } = req.body;

  // console.log(req.body);

  const imageUrls = req.imageUrls;
  // console.log(imageUrls);

  try {
    const [result] = await poll.query(
      "INSERT INTO Productos (nombre_producto, nombre_variante_producto, descripcion_producto, sku_producto, destacar_producto, estado_producto, imagen1_producto, imagen2_producto, imagen3_producto, imagen4_producto, fecha_creado, fecha_actualizado, id_creador_producto, id_color, id_categoria, id_subcategoria, id_marca, cantidad_seriales) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        nombreProducto,
        varianteProducto,
        descripcionProducto,
        skuProducto,
        destacadoProducto,
        estadoProducto,
        imageUrls[0],
        imageUrls[1],
        imageUrls[2],
        imageUrls[3],
        fechaCreado,
        fechaActualizado,
        id_creador_producto,
        id_color,
        id_categoria,
        id_subcategoria,
        id_marca,
        cantSerialesProducto,
      ]
    );

    res.json({
      ok: true,
      msg: "Producto creado",
    });
  } catch (error) {
    console.log("Error al crear el producto", error);

    res.status(500).json({
      ok: false,
      msg: "Error al crear el proyecto",
    });
  }
};

const updateProduct = () => {};

const deleteProduct = () => {};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
