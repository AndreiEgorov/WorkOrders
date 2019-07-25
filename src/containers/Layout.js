import React, { Component } from "react";
import axios from "axios";
import WorkOrders from "../components/WorkOrders";
import InputSearch from "../components/InputSearch/InputSearch";
import Toggle from "../components/Toggle/Toggle";

class Layout extends Component {
  state = {
    orders: [],
    workers: [],
    search: "",
    toggleStatus: true
  };

  componentDidMount() {
    axios
      .get(`https://www.hatchways.io/api/assessment/work_orders`)
      .then(res => {
        const orders = res.data.orders;
        this.setState(state => {
          return { orders };
        });
        const employeesEndpoints = orders.map(order => {
          return `https://www.hatchways.io/api/assessment/workers/${
            order.workerId
          }`;
        });
        const uniqueEndpoints = [...new Set(employeesEndpoints)];
        return axios.all(uniqueEndpoints.map(req => axios.get(req)));
      })
      .then(
        axios.spread((...resps) => {
          const workers = [];
          resps.map(resp => workers.push(resp.data.worker));
          this.setState(state => {
            return { workers };
          });
        })
      );
  }

  inputSearchHandler = event => {
    const inputVal = event.target.value.toLowerCase();
    this.setState((prevState, props) => {
      return {
        search: inputVal
      };
    });
  };

  toggleHandler = () => {
    this.setState((prevState, props) => {
      return {
        toggleStatus: !prevState.toggleStatus
      };
    });
  };

  render() {
    let orders = [...this.state.orders];
    let workers = [...this.state.workers];
    const searchVal = this.state.search;
    const toggleStatus = this.state.toggleStatus;

    if (toggleStatus) {
      orders.sort((a, b) => a.deadline - b.deadline);
    } else {
      orders.sort((a, b) => b.deadline - a.deadline);
    }
    if (searchVal !== "") {
      workers = workers.filter(worker => {
        return worker.name.toLowerCase().search(searchVal) !== -1;
      });

      orders = orders.filter(order => {
        let present = workers.some(w => {
          return w.id === order.workerId;
        });
        if (present) {
          return order;
        }
      });
    }

    return (
      <div>
        <InputSearch change={this.inputSearchHandler} />
        <Toggle clicking={this.toggleHandler} />
        <div>
          <WorkOrders orders={orders} workers={workers} />
        </div>
      </div>
    );
  }
}

export default Layout;
