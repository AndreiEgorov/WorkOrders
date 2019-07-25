import React from "react";
import classes from "./InputSearch.module.css";

const InputSearch = props => {
  return (
    <input
      className={classes.Input}
      onChange={props.change}
      type="text"
      placeholder="Filter by worker name..."
    />
  );
};

export default InputSearch;
