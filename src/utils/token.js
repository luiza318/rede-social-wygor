
const jwt = require("jsonwebtoken");
function generateAccessToken(payload) {
 return jwt.sign(payload, process.env.JWT_SECRET, {
 expiresIn: process.env.JWT_EXPIRES_IN || "15m"
 });
}
module.exports = { generateAccessToken };

// Posso criar ela aq separada ou posso criar ela junto com o auth.controllers (não faz diferença)

/*const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.json({ accessToken: token });
  } catch (e) { next(e); }
} */