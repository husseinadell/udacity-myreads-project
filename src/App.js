import React from "react";
import { Route } from "react-router";
import "./App.css";
import Library from "./components/Library";
import Search from "./components/Search";

const BooksApp = () => {
  return (
    <div className="app">
      <Route exact path="/" component={Library} />
      <Route path="/search" component={Search} />
    </div>
  );
};

export default BooksApp;
