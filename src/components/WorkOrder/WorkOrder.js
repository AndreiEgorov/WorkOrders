import React from "react";
import WorkerInfo from "../WorkerInfo/WorkerInfo";
import classes from "./WorkOrder.module.css";
import moment from "moment";

const WorkOrder = props => {
  const lineColor = props.order.deadline.toString().substring(4);
  return (
    <div className={classes.Card}>
      <h3 className={classes.Title}>{props.order.name}adfasdf</h3>
      <div style={{ background: `#${lineColor}`, height: "5px" }} />
      <p>{props.order.description}</p>
      <WorkerInfo workerInfo={{ ...props.worker }} />
      <span className={classes.Deadline}>
        {moment(props.order.deadline).format("MMMM Do YYYY, h:mm:ss a")}
      </span>
    </div>
  );
};

export default WorkOrder;
