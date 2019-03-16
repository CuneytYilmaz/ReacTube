import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { terms: "" };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.terms}
          onChange={event => this.onSearchChange(event.target.value)}
        />
      </div>
    );
  }

  onSearchChange(term) {
    this.setState({ terms: term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
