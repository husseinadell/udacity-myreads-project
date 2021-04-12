import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

function BooksList(props) {
  return (
    <>
      {props.books.map((book) => (
        <Book key={book.id} book={book} changeShelf={props.changeShelf} />
      ))}
    </>
  );
}

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default BooksList;
