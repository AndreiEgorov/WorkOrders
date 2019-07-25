import React from "react";
import classes from "./WorkerInfo.module.css"
const WorkerInfo = props => {
  return (
    <div className={classes.WorkerWrapper}>
      <img className={classes.Image} src={props.workerInfo.image} />
      <div className={classes.Info}>
        <h3>{props.workerInfo.name}</h3>
        <p>{props.workerInfo.companyName}</p>
        <p>{props.workerInfo.email}</p>
      </div>
    </div>
  );
};

export default WorkerInfo;
