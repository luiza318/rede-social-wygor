const bcrypt = require("bcryptjs");

async function hashPassword(password) {
    return bcrypt.hash(password, 10); 
};

/*async function hashPassword(plainPassword) {
 const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(plainPassword, salt);
} Tem esse outro jeito que cria manualmente mas se usar o bcrypt ele ja faz isso automaticamente*/

async function comparePassword(password, hash) {
    return bcrypt.compare(password. hash);
};

module.exports = {hashPassword, comparePassword};

// bcrypt cria o hash que criptografa a senha e verifica se ela é segura 

// o 10 serve para definir a força da criptografia quanto maior mais lenta 

// Salt é um valor aleatório que é adicionado à senha antes de criptografar, pq se criarem duas senhas iguais a criptografia nao vai ficar igual 