const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

async function createAdminAccount() {
  try {
    const selectedAdmin = await userModel.findOne({ email: "solomon@gmail.com" });
    if (!selectedAdmin) {
      const hashedPassword = await bcrypt.hash("solomon", 10);
      const newAdmin = new userModel({
        email: "solomon@gmail.com",
        name: "admin",
        password: hashedPassword,
        role: "admin"
      });
      await newAdmin.save();
      console.log('Admin created successfully');
    } else {
      console.log('Admin already exists');
    }
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = createAdminAccount;