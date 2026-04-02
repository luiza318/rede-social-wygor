const express = require ("express");
const router = express.Router();
const {createPost, listarPost, atualizarPost} = require('../controller/post.controller');
const { authRequired } = require("../middlewares/auth.middleware");

router.post('/', authRequired, createPost);
router.get('/:id', listarPost);
router.put('/:id', authRequired, atualizarPost);

module.exports = router