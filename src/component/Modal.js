import React from "react";
import "../style/Modal.css";

const Modal = props => {
  const { selectedRecipe } = props;
  if (selectedRecipe) {
    const recipeUrl = selectedRecipe.source_url;
    return (
      <div>
        <a className="view-recipe" href="#openModal">
          View Recipe
        </a>
        <div id="openModal" className="modalDialog">
          <div className="modal-content">
            <a href="#close" title="Close" className="close">
              X
            </a>
            <iframe className="iframe" src={recipeUrl} frameborder="0" />
          </div>
        </div>
      </div>
    );
  }
};

export default Modal;
