import { useEffect, useState } from "react";
import { getBooks, deleteBook } from "../services/api";
import { Link } from "react-router-dom";

function BookList() {
  const [books, setBooks] = useState([]);
  

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const { data } = await getBooks();
    setBooks(data);
  };

  const handleDelete = async (id) => {
    await deleteBook(id);
    loadBooks();
  };

  return (
    <div className="p-6 bg-yellow-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Available Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book._id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <h3 className="text-lg font-bold">{book.title}</h3>
            <p className="text-gray-600">Author: {book.author}</p>
            <p className="text-gray-800 font-medium">Price: ₹{book.price}</p>
            <p className="text-sm text-gray-500">Seller: {book.seller}</p>
            <div className="flex justify-between mt-3">
              <Link to={`/book/${book._id}`} className="text-blue-600 hover:underline">View</Link>
              <button 
                onClick={() => handleDelete(book._id)} 
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
