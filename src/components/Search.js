import React from "react";
import { Link } from "react-router-dom";
import BooksList from "./BooksList";
import { search, update } from "../BooksAPI";

class Search extends React.Component {
  state = {
    query: "",
    books: [],
  };

  changeShelf = (updatedBook, shelf) => {
    update(updatedBook, shelf).then((res) =>
      this.setState((prevState) => ({
        books: prevState.books.filter((book) => book.id !== updatedBook.id),
      }))
    );
  };

  searchBooks = () => {
    search(this.state.query)
      .then((books) => {
        if (books && books.length) {
          this.setState({ books: books });
        } else {
          this.setState({ books: [] });
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({ books: [] });
      });
  };

  handleInputChange = (event) => {
    this.setState({ query: event.target.value }, () => {
      if (this.state.query.length > 2) {
        this.searchBooks();
      }
    });
  };
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <BooksList
              books={this.state.books}
              changeShelf={this.changeShelf}
            />
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
