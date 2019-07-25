import React from "react";
import WorkOrder from "./WorkOrder/WorkOrder";
import classes from "./WorkOrders.module.css";

const WorkOrders = props => {
  const getWorkerForOrder = workerId => {
    if (props.workers) {
      return props.workers.filter(worker => worker.id === workerId)[0];
    }
  };

  let orders;
  if (props.orders.length) {
    orders = props.orders.map(order => {
      return (
        <WorkOrder
          key={order.id}
          order={{ ...order }}
          worker={getWorkerForOrder(order.workerId)}
        />
      );
    });
  } else {
    orders = <h1 className={classes.NoFound}>No orders for this worker</h1>;
  }
  return <div className={classes.WorkOrdersWrapper}>{orders}</div>;
};

export default WorkOrders;
