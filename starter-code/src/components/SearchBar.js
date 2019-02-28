import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textInput: ""
    };
  }

  handleInput = event => {
    this.setState({
      textInput: event.target.value
    });
    this.props.filterFood(event.target.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          className="input search-bar"
          name="search"
          placeholder="Search"
          value={this.state.textInput}
          onChange={e => this.handleInput(e)}
        />
      </div>
    );
  }
}

export default SearchBar;
