// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import BookList from "./pages/BookList";
// import AddBook from "./pages/AddBook";
// import BookDetail from "./pages/BookDetail";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<BookList />} />
//         <Route path="/add" element={<AddBook />} />
//         <Route path="/book/:id" element={<BookDetail />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookList from "./pages/BookList";
import AddBook from "./pages/AddBook";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
