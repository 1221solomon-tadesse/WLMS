const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/Book-store', {
     
    });
    console.log('Connected to local MongoDB');
  } catch (error) {
    console.error('Could not connect to MongoDB...', error);
  }
};

connectDB();
