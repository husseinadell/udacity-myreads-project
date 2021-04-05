import React from "react";
import SearchIcon from "./SearchIcon";
import Shelf from "./Shelf";
import { getAll, update } from "./BooksAPI";

class Library extends React.Component {
  state = {
    books: [],
  };
  componentDidMount() {
    getAll().then((books) => this.setState({ books }));
  }

  changeShelf = (updatedBook, shelf) => {
    update(updatedBook, shelf).then((res) => {
      const changedBook = { ...updatedBook, shelf };
      this.setState((prevState) => ({
        books: prevState.books
          .filter((book) => book.id !== updatedBook.id)
          .concat(changedBook),
      }));
    });
  };

  render() {
    const shelves = [
      { type: "currentlyReading", title: "Currently Reading" },
      { type: "wantToRead", title: "Want to Read" },
      { type: "read", title: "Read" },
    ];
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map((shelf) => (
            <Shelf
              key={shelf.type}
              title={shelf.title}
              books={this.state.books.filter(
                (book) => book.shelf === shelf.type
              )}
              changeShelf={this.changeShelf}
            />
          ))}
        </div>
        <SearchIcon />
      </div>
    );
  }
}

export default Library;
