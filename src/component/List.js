import React from "react";
import "../style/List.css";
import ListItem from "./ListItem";

const List = props => {
  const { data } = props;
  console.log("insideList", data);

  return (
    <div className="list">
      {data.map(item => {
        return <ListItem item={item} key={item.recipe_id} />;
      })}
    </div>
  );
};

export default List;
