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
//get requiest with Id
router.get("/getBooks/:id",async(req,res)=>{
    try{
        books=await bookModel.findById(id)
        res.status(200).json({books})
    }
    catch(error){

    }
})
router.put("/updateBooks/:id",async(req,res)=>
{
    const id=req.params.id
    const {bookname,description,author,image,price}=req.body
    let book;
    try{
        book =await bookModel.findByIdAndUpdate(id,{
            bookname,
            description,
            author,
            image,
            price 
        })
        await book.save().then(()=>res.status(200).json({message:"data updated succesfully."}))
        
    }
    catch(error){
console.log(error)
    }
})
router.delete("/deleteBook/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deletedBook = await bookModel.findByIdAndDelete(id);
      if (deletedBook) {
        res.status(201).json({ message: "Book deleted successfully" });
      } else {
        res.status(404).json({ error: "Book not found" });
      }
    } catch (error) {
      console.error("Error deleting book:", error);
      console.error("Error details:", error.stack);
      res.status(500).json({ error: "An error occurred while deleting the book" });
    }
  });
module.exports=router
