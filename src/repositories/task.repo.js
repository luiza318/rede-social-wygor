const db = require("../config/db");
async function listByUserId(userId) {
 const [rows] = await db.query(
    "SELECT id, title, done, created_at FROM tasks WHERE user_id = ? ORDER BY id DESC", [userId] );
    return rows;
}

async function createTask({ userId, title }) {
    const [result] = await db.query(
    "INSERT INTO tasks (user_id, title) VALUES (?, ?)",
    [userId, title]
 );
 return result.insertId;
}
module.exports = { listByUserId, createTask };

/*Esse código possui duas funções. A primeira (listByUserId) busca todas as tarefas de um usuário no banco de dados utilizando o userId. A segunda (createTask) cria uma nova tarefa para esse usuário e salva no banco de dados.*/