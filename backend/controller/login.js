const authService = require('../scripts/login');

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const { token, user } = await authService.login(email, password);

    if (!user) {
      throw new Error('User not found in response');
    }

    // Directly send the user object to see if it arrives correctly
    res.json({
      token,
      role: user.role,
      user, // Directly return the user object for clarity
    });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}

module.exports = { login };
