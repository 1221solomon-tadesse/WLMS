const mongoose = require('mongoose');

const borrowRequestSchema = new mongoose.Schema({
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
  requestDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('BorrowRequest', borrowRequestSchema);
