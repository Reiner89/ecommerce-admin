// const bcrypt = require("bcrypt");
const poll = require("../Database/config");

// Modelo de usuario
// const Usuario = require("../models/usuario");
const { generarJWT } = require("../Helper/jwt");

// Crear un Usuario
const CreateUser = async (req, res) => {};

// Hacer login
const LoginUser = async (req, res) => {
  // Extraemos el email y la contraseña del body
  var { email, password } = req.body;

  try {
    // Correo existe
    const [userExist] = await poll.query(
      `SELECT 
          tb1.id_usuario,
          tb1.dni_usuario, 
          tb1.nombre_usuario, 
          tb1.apellido_usuario, 
          tb1.contrasena_usuario, 
          tb1.direccion_uno_usuario, 
          tb1.usuario_twitter, 
          tb1.usuario_facebook, 
          tb1.usuario_instagram, 
          tb1.correo_corporativo_usuario,
          tb1.biografia_usuario, 
          tb1.foto_usuario, 
          tb1.conectado, 
          tb1.estado, 
          tb1.fecha_actualizado, 
          tb1.fecha_creado, 
          tb1.id_creador_usuario, 
          tb1.telefono_usuario, 
          tb2.nombre_area, 
          tb3.nombre_cargo, 
          tb4.departamento_ubigeo, 
          tb4.provincia_ubigeo, 
          tb4.distrito_ubigeo
      FROM 
          Usuarios tb1
      INNER JOIN 
          Area tb2 ON tb1.id_area = tb2.id_area
      INNER JOIN 
          Cargo tb3 ON tb3.id_area = tb2.id_area
      INNER JOIN 
          Ubigeo tb4 ON tb1.id_ubigeo = tb4.id_ubigeo
      WHERE 
          tb1.correo_corporativo_usuario = ?`,
      [email]
    );

    // Si no existe el correo
    if (userExist.length === 0) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario no existe",
      });
    }

    // Buscamos si la contrasena es correcta
    const validPassword = userExist[0].contrasena_usuario === password;

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "La contrasena es incorrecta",
      });
    }

    // Generamos el JWT
    const token = await generarJWT(userExist[0].id_usuario);

    // eliminamos la contraseña de la respuesta
    delete userExist[0].contrasena_usuario;

    // Devolvemos los datos
    res.status(200).json({
      ok: true,
      msg: "Login correcto",
      user: userExist[0],
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, ok: false });
  }
};

// Renovar token de acceso
const RefreshToken = async (req, res) => {
  try {
    // Recogemos el id del request
    const id = req.id;

    // Generamos un nuevo token
    const token = await generarJWT(id);

    // Obtenemos el usuario
    const [user] = await poll.query(
      `SELECT 
          tb1.id_usuario,
          tb1.dni_usuario, 
          tb1.nombre_usuario, 
          tb1.apellido_usuario, 
          tb1.contrasena_usuario, 
          tb1.direccion_uno_usuario, 
          tb1.usuario_twitter, 
          tb1.usuario_facebook, 
          tb1.usuario_instagram, 
          tb1.correo_corporativo_usuario,
          tb1.biografia_usuario, 
          tb1.foto_usuario, 
          tb1.conectado, 
          tb1.estado, 
          tb1.fecha_actualizado, 
          tb1.fecha_creado, 
          tb1.id_creador_usuario, 
          tb1.telefono_usuario, 
          tb2.nombre_area, 
          tb3.nombre_cargo, 
          tb4.departamento_ubigeo, 
          tb4.provincia_ubigeo, 
          tb4.distrito_ubigeo
      FROM 
          Usuarios tb1
      INNER JOIN 
          Area tb2 ON tb1.id_area = tb2.id_area
      INNER JOIN 
          Cargo tb3 ON tb3.id_area = tb2.id_area
      INNER JOIN 
          Ubigeo tb4 ON tb1.id_ubigeo = tb4.id_ubigeo
      WHERE 
          tb1.id_usuario = ?`,
      [id]
    );

    // eliminamos la contraseña de la respuesta
    delete user[0].contrasena_usuario;

    // Devolvemos el token con la informacion del usuario
    res.status(200).json({
      ok: true,
      msg: "Token generado correctamente",
      token,
      user: user[0],
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error en el servidor",
      ok: false,
    });
  }
};

module.exports = {
  CreateUser,
  LoginUser,
  RefreshToken,
};
