const jwt = require("jsonwebtoken");

// Funcion para generar el token de acceso con el ID del usuario autenticado.
const generarJWT = (id) => {
  return new Promise((resolve, reject) => {
    // Depuracion
    console.log(`Generando token para el usuario ${id}`);

    // Se crea un payload con la informacion del usuario autenticado
    const payload = { id };

    jwt.sign(
      payload,
      process.env.JWT_KEY || "secret",
      { expiresIn: "1d" },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
};

// Funcion para combrobar que usuario genero el JWT
const comprobarJWT = (token = "") => {
  // Depuracion
  console.log(`Verificando el token: ${token}`);

  try {
    const { id } = jwt.verify(token, process.env.JWT_KEY);
    return [true, id];
  } catch (error) {
    console.log(error);
    return [false, null];
  }
};

module.exports = {
  generarJWT,
  comprobarJWT,
};
