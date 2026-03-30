const repo = require ("../repositories/post.repo");

function createPost (req, res){
    let body = req.body;
    repo.insertPost(body)
}

module.exports = {createPost}

/*{
    "conteudo": 1,
    "descripition" : "descrição do post",
    "midia" : [
        {"url" : "/midia/img/image1.jpg"},
        {"url" : "/midia/video/video1.mp4"}
    ]
}*/