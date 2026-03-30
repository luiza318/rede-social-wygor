const db = require("../config/db");

async function insertPost(body) {
    let sql = 'insert into posts (user_id, descricao) values (?,?)';
}

module.exports = {insertPost}