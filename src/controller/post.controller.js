const {insertPost, findById} = require('../repositories/post.repo');
const { hashPassword } = require('../validations/password');

function createPost(req, res) {
    let body = req.body;
    insertPost(body);
    res.send('Postagem cadastrada')
}

async function listarPost(req, res, next){
    try{
        const { id } = req.params;
        const post = await findById(id);
        res.json(post);
    } catch (e) {next (e)}
}

/*async function atualizarPost(req, res, next) {
    try{
        const {conteudo} = req.body;
        const password_hash = await hashPassword(password);
        await
    }
}*/

module.exports = {createPost, listarPost}