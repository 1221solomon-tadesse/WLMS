const authService = require('../scripts/login');

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const { token, user } = await authService.login(email, password);
    res.json({ token, role: user.role });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}

module.exports = { login };