import React from 'react'
import '../styles/Books.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import BooksSection from './BooksSection';

const Books = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1000/api/v1/getBooks');
        console.log('API response:', response);
        if (response.data && response.data.books) {
          setData(response.data.books);
        } else {
          console.error('API response did not contain expected data format:', response.data);
          setData([]);
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]);
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, []);
  return (
    <>
      <div className="book-section">
        <div className="container">
          <div className="book-section-title">
            <h2>Book section</h2>
          </div>
          {isLoading ? (
            <div className="text-align-center">Loading...</div>
          ) : (
            data.length > 0 ? (
              <BooksSection data={data} />
            ) : (
              <div className="text-align-center">No data available</div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Books;