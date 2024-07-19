import React from 'react';

const BooksSection = ({ data, isLoading }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data.length === 0) {
    return <div>No books found.</div>;
  }

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {data.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Description: {book.description}</p>
            <p>Price: ${book.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksSection;