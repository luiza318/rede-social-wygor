const jwt = require("jsonwebtoken");

function authRequired(req, res, next){
    const auth = req.headers.authorization;
    if(!auth) return res.status(401).json({message: "Token ausente"});  

    const [,token] = auth.split(" ");
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch{
        return res.status(401).json({message: "TOKEN INVÁLIDO"});
    }
};

module.exports = { authRequired};

// O split é para pegar somente o token e nao o bearer
// mandar a requisição continuar para a próxima função