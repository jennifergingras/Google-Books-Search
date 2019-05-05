import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/nav';
import Search from './components/search';
import BookCard from './components/bookcard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Search />
        <BookCard />
      </div>
    </Router>
  );
}

export default App;
