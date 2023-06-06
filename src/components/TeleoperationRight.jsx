import React, { Component } from 'react';
import { Joystick } from 'react-joystick-component';


class Teleoperation extends Component {
    state = { ros: null };
    
    constructor() {
        super();
        this.init_connection();
        
        this.handleMove = this.handleMove.bind(this);
      }
    
      init_connection() {
        this.state.ros = new window.ROSLIB.Ros();
        console.log(this.state.ros);
        console.log("Starting Connection!");
    
        this.state.ros.on("connection", () => {
          console.log("connection Established Teleope!");
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
    
    handleMove (event) {
        console.log("handle move");
        // we need to create a ROS publisher on the topic velocity
        var cmd_vel = new window.ROSLIB.Topic({
            ros: this.state.ros,
            name: "/cmd_vel",
            messagetype: "geometry_msgs/Twist",
        });

        // we need to create a twist message to be published on the rosbridge
        var Twist = new window.ROSLIB.Message({
            linear: {
                x: 0,
                y: 0,
                z: 0,
            },
            angular: {
                x: 0,
                y: 0,
                z: event.x/50,
            }
        });
        // we need to publish the messga eon velocity 
        cmd_vel.publish(
            Twist
        )

    }
    handleStop () {
        console.log("handle move");
    }
    render(){
        return (
            <div>
                <Joystick
                size = {100}
                baseColor='grey'
                stickColor='black'
                throttle={50}
                move={this.handleMove}
                stop={this.handleStop}
                >
                </Joystick>
            </div>
        );
    }
}

export default Teleoperation;