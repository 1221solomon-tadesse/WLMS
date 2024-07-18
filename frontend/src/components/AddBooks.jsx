import React from 'react'
import '../styles/AddBook.css'
const AddBooks = () => {
  return (<>
   <div class="form-container mb-3">
  <div class="form-group">
    <label class="form-label">Book Name</label>
    <input type="text" class="form-control" placeholder="Enter book name" />
  </div>
  <div class="form-group">
    <label class="form-label">Author Name</label>
    <input type="text" class="form-control" placeholder="Enter author name" />
  </div>
  <div class="form-group">
    <label class="form-label">Description</label>
    <input type="text" class="form-control" placeholder="Enter description" />
  </div>
  <div class="form-group">
    <label class="form-label">Image</label>
    <input type="text" class="form-control" placeholder="Enter the url of the image" />
  </div>
  <div class="form-group">
    <label class="form-label">Price</label>
    <input type="Number" class="form-control" placeholder="Enter Inter the price of the book" />
  </div>
  <button class="btn btn-primary mt-3">Save</button>
</div>

  </>
   
  )
}

export default AddBooks