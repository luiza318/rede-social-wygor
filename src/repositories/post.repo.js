const db = require('../config/db');

async function insertPost(body){
    let {user_id, conteudo, midia} = body;

    let sql = 'insert into posts (user_id, conteudo) values (?, ?)';
    
    const [result] = await db.query(
        sql,
        [user_id, conteudo]
    );

    //recupera-se o id do post inserido
    let post_id = result.insertId;

    //inserir midias na tabela
    for (m of midia) {
        console.log(m.url);
        insertMidia(post_id, m.url);
    }
}

async function insertMidia(post_id, url){
    let sql = `insert into midias (post_id, url) values (?, ?)`;
    const [result] = await db.query(
        sql,
        [post_id, url]
    )
}

async function findById(id) {
    const [rows] = await db.query("SELECT * FROM posts WHERE id = ?",[id]);
    return rows [0]
}

module.exports = {insertPost, findById}




