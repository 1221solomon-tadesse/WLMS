const router=require("express").Router()
const bookModel=require("../models/booksModel")
//post requiest
router.post('/add',async(req,res)=>{
 try{
const data =req.body
const newBook=new bookModel(data)
await newBook.save().then(()=>{
    res.status(200).json({message:"books add succcessfuly"})
})
 }
 catch(error){
 console.log(error)
 }
})
///getrequest
router.get("/getBooks",async(req,res)=>{
try{
books=await bookModel.find()
res.status(200).json({books})
}
catch(error){
    console.log(error)
}
})
router.get("/getBooks", async (req, res) => {
	const query = req.query.query;

	try {
		// Search for books that match the query
		const books = await bookModel.find({
			name: new RegExp(query, 'i'),  // Assuming 'name' is the field you want to search
		});
		res.status(200).json({ books });
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Server error" });
	}
});
// Get request with ID
router.get("/getBooks/:id", async (req, res) => {
  const { id } = req.params; // Extract id from request parameters
  try {
    const book = await bookModel.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ book }); // Correct response property
  } catch (error) {
    console.error("Error fetching book:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Update request with ID
router.put("/updateBooks/:id", async (req, res) => {
  const id = req.params.id;
  const { bookname, description, author, image, price } = req.body;

  try {
    const book = await bookModel.findByIdAndUpdate(
      id,
      { bookname, description, author, image, price },
      { new: true, runValidators: true } // Return updated document and validate
    );

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Data updated successfully.", book });
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).json({ message: "Server error" });
  }
});
router.delete("/deleteBook/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBook = await bookModel.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ message: "Server error" });
  }
});
module.exports=router
