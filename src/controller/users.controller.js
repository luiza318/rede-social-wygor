const repo = require("../repositories/user.repo");
const { hashPassword } = require("../validations/password");

async function id(req, res, next) {
  try {
    const user = await repo.findById(req.user.id);
    res.json(user);
  } catch (e) { next(e); }
}

async function update(req, res, next) {
  try{
    const{name, email, password} = req.body;
    const password_hash = await hashPassword(password); 
    await repo.userUpdate(req.user.id, name, email, password_hash);
    const user = await repo.findById(req.user.id);
    res.json(user);
  } catch(e){next(e)}
}

module.exports = { id, update };
