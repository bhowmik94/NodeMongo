const express = require("express");
const { register, login } = require("../controllers/authController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// When the access token expires, frontend calls this endpoint to get a new one
router.post("/refresh", (req, res) => {
  const { refreshToken } = req.cookies;
  if (!refreshToken)
    return res.status(401).json({ message: "No refresh token" });

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const newAccessToken = jwt.sign(
      { id: decoded.id },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );
    res.json({ token: newAccessToken });
  } catch (err) {
    return res
      .status(403)
      .json({ message: "Invalid or expired refresh token" });
  }
});

module.exports = router;
