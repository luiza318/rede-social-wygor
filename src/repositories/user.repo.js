const db = require("../config/db");

async function findByEmail(email) {
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    return rows[0];
}

async function createUser(name, email, passaword_hash) {
    const [result] = await db.query(
        "INSERT INTO users (name, email, passaword_hash) VALUES (?, ?, ?)",
        [name, email, passaword_hash]
    );
    return result.insertId;
}

async function findById(id) {
    const [rows] = await db.query("SELECT id, name, email FROM users where ID = ?",[id]);
    return rows[0]
}

module.exports = {findByEmail, createUser, findById};

/* O hash transforma a senha em um código seguro antes de salvar no banco de dados, para proteger a senha do usuário.
Esse código possui três funções.
A primeira (findByEmail) busca um usuário pelo email no banco de dados e retorna o resultado encontrado, sendo usada principalmente para verificar se o email já está cadastrado.
A segunda (createUser) cria um novo usuário no banco com nome, email e senha criptografada, e retorna o id do usuário criado.
A terceira (findById) busca um usuário no banco de dados utilizando seu id. */

