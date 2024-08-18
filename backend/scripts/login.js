const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const { GenerateToken } = require('../utils/jwtUtils');

async function login(email, password) {
  try {
    const existingUser = await userModel.findOne({ email });
    // console.log('Fetched User:', existingUser); // Log the fetched user

    if (!existingUser) {
      throw new Error('User not found!');
    }

    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      throw new Error('Incorrect password');
    }

    const token = GenerateToken(existingUser);
    // console.log('Generated Token:', token); // Log the generated token

    return { token, user: existingUser }; // Return user with token
  } catch (error) {
    console.error('Login Error:', error); // Log any errors
    throw error;
  }
}

module.exports = { login };
