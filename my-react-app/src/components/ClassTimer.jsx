import React, { Component } from "react";

export class ClassTimer extends Component {
  interval;
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }
  render() {
    return <div>{this.state.timer}</div>;
  }
}

export default ClassTimer;
