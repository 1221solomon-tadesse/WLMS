const router = require('express').Router();
const BorrowRequest = require('../models/borrowRequestModel');
const Book = require('../models/booksModel');

// Create a borrow request
router.post('/requestBorrow', async (req, res) => {
  const { bookId, userId } = req.body;
  
  try {
    // Check if the book exists
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    // Create a new borrow request
    const newRequest = new BorrowRequest({ bookId, userId });
    await newRequest.save();

    res.status(200).json({ message: "Borrow request created successfully", newRequest });
  } catch (error) {
    console.error("Error creating borrow request:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all borrow requests
router.get('/getRequests', async (req, res) => {
  try {
    const requests = await BorrowRequest.find().populate('bookId').populate('userId');
    res.status(200).json({ requests });
  } catch (error) {
    console.error("Error fetching borrow requests:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get borrow requests for the logged-in user
router.get('/getUserRequests', async (req, res) => {
  try {
    const userId = req.user._id;
    const requests = await BorrowRequest.find({ userId }).populate('bookId').populate('userId');
    res.status(200).json({ requests });
  } catch (error) {
    console.error("Error fetching borrow requests:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Update request status (admin use)
router.put('/updateRequest/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body; // New status (e.g., approved, rejected)

  try {
    const request = await BorrowRequest.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    ); 

    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    res.status(200).json({ message: `Request ${status} successfully`, request });
  } catch (error) {
    console.error("Error updating borrow request:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
 