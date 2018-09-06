import React from "react";
import Button from "./Button";
const INPUT_PLACEHOLDER = "Ingredients e.g. chicken, carrot, pasta...";
const SEARCH_BUTTON_TEXT = "Find Recipes";

const Search = props => {
  const { handleUserInput } = props;
  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder={INPUT_PLACEHOLDER}
        onChange={event => handleUserInput(event)}
      />
      <Button
        className="search-button"
        content={SEARCH_BUTTON_TEXT}
        handleClick={props.handleClick}
      />
    </div>
  );
};

export default Search;
