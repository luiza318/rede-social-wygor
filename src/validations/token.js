
const jwt = require("jsonwebtoken");
function generateAccessToken(payload) {
 return jwt.sign(payload, process.env.JWT_SECRET, {
 expiresIn: process.env.JWT_EXPIRES_IN || "5hr"
 });
}
module.exports = { generateAccessToken };
