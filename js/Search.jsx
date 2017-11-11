import React, { Component } from "react";
import ShowCard from "./ShowCard";
import preload from "../data.json";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  render() {
    return (
      <div className="search">
        <div>{preload.shows.map(show => <ShowCard key={show.imdbID} {...show} />)}</div>
      </div>
    );
  }
}

export default Search;
