import { useState } from "react";
// import { addBook } from "../services/api";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [form, setForm] = useState({ title: "", author: "", price: "", seller: "" });
  const navigate = useNavigate();
//   useEffect(() => {
//     // Dummy data for testing before backend is ready
//     const dummyBooks = [
//       { _id: "1", title: "Clean Code", author: "Robert C. Martin", price: 350, seller: "Amit" },
//       { _id: "2", title: "JavaScript: The Good Parts", author: "Douglas Crockford", price: 250, seller: "Priya" },
//       { _id: "3", title: "Introduction to Algorithms", author: "Thomas H. Cormen", price: 500, seller: "Rahul" },
//     ];
//     setBooks(dummyBooks);
//   }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBook(form);
    navigate("/");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Add a Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          name="title" 
          placeholder="Title" 
          onChange={handleChange} 
          required 
          className="w-full p-2 border rounded"
        />
        <input 
          name="author" 
          placeholder="Author" 
          onChange={handleChange} 
          required 
          className="w-full p-2 border rounded"
        />
        <input 
          name="price" 
          placeholder="Price" 
          type="number" 
          onChange={handleChange} 
          required 
          className="w-full p-2 border rounded"
        />
        <input 
          name="seller" 
          placeholder="Seller Name" 
          onChange={handleChange} 
          required 
          className="w-full p-2 border rounded"
        />
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;

