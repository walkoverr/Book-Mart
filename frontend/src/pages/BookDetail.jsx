import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookById } from "../services/api";

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  

  useEffect(() => {
    const fetchBook = async () => {
      const { data } = await getBookById(id);
      setBook(data);
    };
    fetchBook();
  }, [id]);

  if (!book) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-lg mx-auto border rounded shadow">
      <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
      <p className="text-gray-600">Author: {book.author}</p>
      <p className="text-lg font-medium">Price: ₹{book.price}</p>
      <p className="text-sm text-gray-500">Seller: {book.seller}</p>
    </div>
  );
}

export default BookDetail;
