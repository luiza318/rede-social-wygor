const express = require ("express");
const router = express.Router();

router.post('/post', create);

module.exports = router