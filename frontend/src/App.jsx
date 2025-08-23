import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddBook from './pages/AddBook'
import BookDetail from './pages/BookDetail'
import BookList from './pages/BookList'
import Navbar from './components/Navbar.jsx'
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/books/:id" element={<BookDetail />} />
      </Routes>
    </Router>
  )
}

export default App
