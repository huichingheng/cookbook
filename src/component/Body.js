import React, { Component } from "react";
import SideBar from "./SideBar";
import Display from "./Display";
import "../style/Body.css";
import seedData from "../utils/seedData"
import { URL, API_KEY } from "../utils/getHelper";


class Body extends Component {
  constructor() {
    super();
    this.state = {
      isHelpClicked: false,
      data: [],
      selectedRecipe: null
    };
    this.userInput = "";
  }

  searchClickHandler = async () => {
    const url = URL(API_KEY, this.userInput);
    const response = await fetch(url);
    
    if (response.status === 200) {
      const recipesData = await response.json();
      if(recipesData.error === "limit") {
        this.setState({ data: seedData.recipes });
      } else {
        this.setState({ data: recipesData.recipes });
      }
    }
  };

  userInputEventListener = event => {
    this.userInput = event.target.value;
  };

  setSelectedRecipe = id => {
    // eslint-disable-next-line
    const selectedRecipe = this.state.data.find(recipe => {
      if (recipe.recipe_id === id) {
        return recipe;
      }
    });
    // eslint-disable-next-line
    this.setState({ selectedRecipe: selectedRecipe });
  };

  render() {
    const { data, selectedRecipe } = this.state;
    return (
      <div className="body">
        <Display className="display" selectedRecipe={selectedRecipe} />
        <SideBar
          className="side-bar"
          data={data}
          handleClick={this.setSelectedRecipe}
          handleUserInput={this.userInputEventListener}
          handleSearchClick={this.searchClickHandler}
          selectedRecipe={selectedRecipe}
        />
      </div>
    );
  }
}

export default Body;
