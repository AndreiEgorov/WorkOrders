import React from "react";
import WorkerInfo from "../WorkerInfo/WorkerInfo";
import classes from "./WorkOrder.module.css";

const WorkOrder = props => {
  const lineColor = props.order.deadline.toString().substring(4);
  return (
    <div className={classes.Card}>
      <h3 className={classes.Title}>{props.order.name}adfasdf</h3>
      <div style={{ background: `#${lineColor}`, height: "5px" }} />
      <p>{props.order.description}</p>
      <WorkerInfo workerInfo={{ ...props.worker }} />
      <span className={classes.Deadline}>{props.order.deadline}</span>
    </div>
  );
};

export default WorkOrder;
