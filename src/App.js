import React from "react";
import { Route } from "react-router";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import Library from "./Library";
import Search from "./Search";

const BooksApp = () => {
  return (
    <div className="app">
      <Route exact path="/" component={Library} />
      <Route path="/search" component={Search} />
    </div>
  );
};

export default BooksApp;
