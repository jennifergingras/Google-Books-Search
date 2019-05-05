import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/nav';
import Search from './components/search';
import BookCard from './components/bookcard';
import './App.css';

class Search extends Component() {
  state = {
    search: "",
    results: []
  }

  componentDidMount() {
    API.getBaseBreedsList()
      .then(res => this.setState({ breeds: res.data.message }))
      .catch(err => console.log(err));
  }



  render() {
    return (
      <div>
        <Navbar />
        <Search />
        <BookCard />
      </div >
    );
  };
}

export default Search;
