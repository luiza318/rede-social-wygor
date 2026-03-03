const mysql = require("mysql2/promise")

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

module.exports = pool; 

// O createPool() reutiliza conexões em vez de criar uma nova a cada requisição ao banco de dados, deixando a aplicação mais eficiente e estável