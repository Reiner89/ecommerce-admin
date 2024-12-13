const jwt = require("jsonwebtoken");

const validarJWT = (req, res, next) => {
  try {
    // Obtenemos el token del header
    const token = req.headers["x-token"];

    // Si no existe el token, enviamos un mensaje de no autorizado
    if (!token) {
      return res.status(401).json({
        ok: false,
        message: "Acceso no permitido, token no encontrado",
      });
    }

    // Verificamos el token, y accedemos al id del usuario a través del payload
    const { id } = jwt.verify(token, process.env.JWT_KEY || "secret");
    const response = jwt.verify(token, process.env.JWT_KEY || "secret");
    req.id = id;
    console.log("Token valido: ", response);

    // Si la verificación es exitosa, podemos continuar con la solicitud
    next();
  } catch (error) {
    res.status(500).json({ ok: false, message: "Token no valido" });
  }
};

module.exports = {
  validarJWT,
};
