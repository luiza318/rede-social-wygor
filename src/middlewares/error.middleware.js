function errorHandler(err, req, res, next){
    console.error("ERROR", err.message);
    return res.status(err.status || 500).json({
        message: err.message || "Erro interno no servidor"
    });
}

module.exports = {errorHandler};

/* 
Código utilizado para identificar e tratar os erros da aplicação.
Ele usa o err.status para retornar o código do erro.
Se o erro não tiver um status definido, utiliza o código 500,
que representa erro interno do servidor.
*/