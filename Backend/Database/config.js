// Importamos mysql
const mysql = require("mysql2/promise");

// Realizamos la conexión a la base de datos
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Badangop12",
  database: "Ecommerce",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool
  .getConnection()
  .then(() => console.log("Conexión a MySQL exitosa"))
  .catch((error) => {
    console.error("Error al conectar a MySQL:", error);
    process.exit(1);
  });

module.exports = pool;
