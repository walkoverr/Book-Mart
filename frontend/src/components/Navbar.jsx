import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <h1 className="text-white font-bold text-lg">📚 BookMart</h1>
      <div className="space-x-4">
        <Link to="#" className="text-white hover:underline">MyBooks</Link>
        <Link to="/" className="text-white hover:underline">Book List</Link>
        <Link to="/add" className="text-white hover:underline">Add Book</Link>
      </div>
    </nav>
  );
}

export default Navbar;
