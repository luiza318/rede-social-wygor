const taskRepo = require("../repositories/task.repo");
async function list(req, res, next) {
 try {
 const tasks = await taskRepo.listByUserId(req.user.id);
 return res.json(tasks);
 } catch (err) {
 return next(err);
 }
}
async function create(req, res, next) {
 try {
 const { title } = req.body;
 if (!title) {
 return res.status(400).json({ message: "title é obrigatório" });
 }
 const taskId = await taskRepo.createTask({ userId: req.user.id, title
});
 return res.status(201).json({ id: taskId, title, done: 0 });
 } catch (err) {
 return next(err);
 }
}
module.exports = { list, create };