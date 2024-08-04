import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Update = ({currrent_user}) => {
  const { id } = useParams();
 
  const [data, setData] = useState({
    bookname: "",
    author: "",
    description: "",
    image: "",
    price: ""
  });

  useEffect(() => {
    if (!id) {
      console.log('ID is not defined');
      return;
    }
  
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:1000/api/v1/getBooks/${id}`);
        setData(response.data.book); // Adjust according to your API response
      } catch (error) {
        console.log('Error while fetching data:', error.response ? error.response.data : error.message);
      }
    };
  
    fetchData();
  }, [id]);



  if (!data) {
    return <div>Loading...</div>;
  }

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:1000/api/v1/updateBooks/${id}`, data);
      alert('Book updated successfully!'); 
    } catch (error) {
      console.log('Error while updating data', error.message);
      
    }
  }

  return (
    currrent_user==='admin'?
    <div>
      <h2>Update Book</h2>
      
      <div className='main'>
        <div className="form-container mb-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Book Name</label>
              <input type="text" className="form-control" name="bookname" value={data.bookname} onChange={handleInputChange} placeholder="Enter book name" />
            </div>
            <div className="form-group">
              <label className="form-label">Author Name</label>
              <input type="text" className="form-control" name="author" value={data.author} onChange={handleInputChange} placeholder="Enter author name" />
            </div>
            <div className="form-group">
              <label className="form-label">Description</label>
              <input type="text" className="form-control" name="description" value={data.description} onChange={handleInputChange} placeholder="Enter description" />
            </div>
            <div className="form-group">
              <label className="form-label">Image</label>
              <input type="text" className="form-control" name="image" value={data.image} onChange={handleInputChange} placeholder="Enter the url of the image" />
            </div>
            <div className="form-group">
              <label className="form-label">Price</label>
              <input type="number" className="form-control" name="price" value={data.price} onChange={handleInputChange} placeholder="Enter the price of the book" />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Update Book</button>
          </form>
        </div>
      </div>
    </div>:<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', }}> <div style={{ textDecoration: 'none', borderRadius: '0.25rem', backgroundColor: '#3A9DAB', color: '#fff', padding: '0.5rem 1rem', }}> 
      <h>you are not authorized</h> </div> </div>

  );
};

export default Update;