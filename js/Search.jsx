import React, { Component } from "react";
import ShowCard from "./ShowCard";
import preload from "../data.json";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }
  handleSearchTermChange(event) {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return (
      <div className="search">
        <header>
          <h1>Media Search</h1>
          <input
            type="text"
            placeholder="Search"
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
          />
        </header>
        <div>{preload.shows.map(show => <ShowCard key={show.imdbID} {...show} />)}</div>
      </div>
    );
  }
}

export default Search;
