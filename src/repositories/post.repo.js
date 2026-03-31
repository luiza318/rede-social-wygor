const db = require("../config/db");

async function insertPost(body) {
    let {user_id, conteudo, mideas} = body;

    let sql = 'insert into posts (user_id, conteudo) values (?,?)';
        const [result] = await db.query(
        sql,
        [user_id, conteudo]
    );
    // recupera id dopost inserido
    let post_id = result.insertId;

    // inserir mideas na tabela
    for (m in mideas){
        insertMidias(post_id ,m.url);
    }
}

async function insertMidias(post_id, url) {
    let sql =  'insert into mideas (post_id, url) values (?,?)';
    const [result] = await db.query(
        sql,
        {post_id, url}
    )
} 

async function findById(id) {
    const [rows] = await db.query("SELECT * FROM posts WHERE id = ?",[id]);
    return rows [0]
}

module.exports = {insertPost, findById}

