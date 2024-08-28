import React, { useState } from 'react';
import './App.css';

function App() {
  const [book, setBook] = useState({ title: '', author: '', price: '' });
  const [bookList, setBookList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.title && book.author && book.price) {
      setBookList([...bookList, book]);
      setBook({ title: '', author: '', price: '' });
    }
  };

  return (
    <div className="app">
      <h1>Book Entry Form</h1>
      <form onSubmit={handleSubmit} className="book-form">
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
          placeholder="Enter Book Title"
        />
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          placeholder="Enter Author"
        />
        <input
          type="text"
          name="price"
          value={book.price}
          onChange={handleChange}
          placeholder="Enter Price"
        />
        <button type="submit">Add Book</button>
      </form>
      <h2>Book List</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {bookList.map((b, index) => (
            <tr key={index}>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
