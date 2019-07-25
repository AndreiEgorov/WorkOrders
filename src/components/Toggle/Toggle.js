import React from "react";
import classes from "./Toggle.module.css";

const Toggle = props => {
  return (
    <div className={classes.Wrapper}>
      <p className={classes.SideText}>Earliest first </p>
      <div className={classes.Switch}>
        <input
          id="switch-1"
          type="checkbox"
          className={classes.SwitchInput}
          onClick={props.clicking}
        />
        <label htmlFor="switch-1" className={classes.SwitchLabel}>
          Switch
        </label>
      </div>
      <p className={classes.SideText}>Latest first </p>
    </div>
  );
};
export default Toggle;
