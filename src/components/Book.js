import React from "react";
import PropTypes from "prop-types";

const Book = (props) => {
  const handleChange = (event) => {
    props.changeShelf(props.book, event.target.value);
  };
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${props.book.imageLinks?.thumbnail}")`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select value={props.book.shelf || "none"} onChange={handleChange}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">
          {props.book.title || "No title available"}
        </div>
        <div className="book-authors">{props.book.authors.join(", ")}</div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default Book;
