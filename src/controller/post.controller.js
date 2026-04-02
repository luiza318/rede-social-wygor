const {insertPost, findById, updatePost} = require('../repositories/post.repo');

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

async function atualizarPost(req, res, next) {
    try{
        const { id } = req.params;
        const {conteudo, midia} = req.body;
        await updatePost(id, conteudo, midia);
        const post = await findById(id);
        res.json(post);
    } catch (e) { next (e)}
}

module.exports = {createPost, listarPost, atualizarPost}