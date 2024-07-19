import React from 'react'
import '../styles/AddBook.css'
const AddBooks = () => {
  return (<>
   <div className="form-container mb-3">
  <div className="form-group">
    <label className="form-label">Book Name</label>
    <input type="text" className="form-control" placeholder="Enter book name" />
  </div>
  <div className="form-group">
    <label className="form-label">Author Name</label>
    <input type="text" className="form-control" placeholder="Enter author name" />
  </div>
  <div className="form-group">
    <label className="form-label">Description</label>
    <input type="text" className="form-control" placeholder="Enter description" />
  </div>
  <div className="form-group">
    <label className="form-label">Image</label>
    <input type="text" className="form-control" placeholder="Enter the url of the image" />
  </div>
  <div className="form-group">
    <label className="form-label">Price</label>
    <input type="Number" className="form-control" placeholder="Enter Inter the price of the book" />
  </div>
  <button className="btn btn-primary mt-3">Save</button>
</div>

  </>
   
  )
}

export default AddBooks