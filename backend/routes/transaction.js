const router = require("express").Router();
const bookModel = require("../models/booksModel");
const BookTransaction = require("../models/bookTransaction.js");

router.post("/add-transaction", async (req, res) => {
  try {
    if (req.body.isAdmin === true) {
      const newTransaction = await new BookTransaction({
        bookId: req.body.bookId,
        borrowerId: req.body.borrowerId,
        bookName: req.body.bookName,
        borrowerName: req.body.borrowerName,
        transactionType: req.body.transactionType,
        fromDate: req.body.fromDate,
        toDate: req.body.toDate,
      });
      const transaction = await newTransaction.save();
      const book = await bookModel.findById(req.body.bookId);
      book.transactions.push(transaction._id);
      await book.save();
      res.status(200).json(transaction);
    } else if (req.body.isAdmin === false) {
      res.status(500).json("You are not allowed to add a Transaction");
    }
  } catch (err) {
    res.status(504).json(err);
  }
});

router.get("/all-transactions", async (req, res) => {
  try {
    const transactions = await BookTransaction.find({}).sort({ _id: -1 });
    res.status(200).json(transactions);
  } catch (err) {
    return res.status(504).json(err);
  }
});

router.put("/update-transaction/:id", async (req, res) => {
  try {
    if (req.body.isAdmin) {
      const updatedTransaction = await BookTransaction.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedTransaction);
    } else {
      res.status(403).json("You are not authorized to update this transaction");
    }
  } catch (err) {
    res.status(504).json(err);
  }
});

router.delete("/remove-transaction/:id", async (req, res) => {
  try {
    if (req.body.isAdmin) {
      const transaction = await BookTransaction.findByIdAndDelete(req.params.id);
      const book = await Book.findById(transaction.bookId);
      book.transactions.pull(req.params.id);
      await book.save();
      res.status(200).json("Transaction deleted successfully");
    } else {
      res.status(403).json("You don't have permission to delete a transaction");
    }
  } catch (err) {
    return res.status(504).json(err);
  }
});

module.exports = router;