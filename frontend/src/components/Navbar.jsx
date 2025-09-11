import { useContext } from "react";
import { Link } from "react-router-dom";   // 👈 import Link
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={{ padding: "10px", background: "#f5f5f5" }}>
      <Link to="/">Book List</Link>
      {user ? (
        <>
          <Link to="/add">Add Book</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
