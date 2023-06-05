import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";
import Config from '../scripts/config';

class Connection extends Component {
  state = { connected: false, ros: null };

  constructor() {
    super();
    this.init_connection();
  }

  init_connection() {
    this.state.ros = new window.ROSLIB.Ros();
    console.log(this.state.ros);
    console.log("Starting Connection!");

    this.state.ros.on("connection", () => {
      console.log("connection Established!");
      this.setState({ connected: true });
    });

    this.state.ros.on("close", () => {
      console.log("connection is closed!");
      this.setState({ connected: false });
      //trying to reconnect
      setTimeout(() => {
        try {
          this.state.ros.connect("ws://172.26.232.193:9090");
        } catch (error) {
          console.log("connection error");
        }
      }, 10);
    });
    try {
      //this.state.ros.connect("ws://172.26.232.193:9090");
      this.state.ros.connect("ws://172.26.232.193:9090");
    } catch (err) {
      console.log("connection error");
    }
  }

  render() {
    return (
      <div>
        <Alert
          className="text-center m-3"
          variant={this.state.connected ? "success" : "danger"}
        >
          {this.state.connected ? "Connected" : "Disconnected"}
        </Alert>
      </div>
    );
  }
}

export default Connection;
