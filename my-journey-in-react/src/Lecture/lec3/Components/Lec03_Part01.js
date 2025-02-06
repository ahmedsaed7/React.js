import React, { Component } from "react";

class Lec03_Part01 extends Component {
  state = {
    num: 100,
  };

  add = () => {
    this.setState({
      num: this.state.num + 1,
    });
  };

  sub = () => {
    this.setState({
      num: this.state.num - 1,
    });
  };

  mul = () => {
    this.setState({
      num: this.state.num * 2,
    });
  };

  div = () => {
    this.setState({
      num: this.state.num / 2,
    });
  };

  reset = () => {
    this.setState({
      num: (this.state.num = 0),
    });
  };

  render() {
    return (
      <>
        <div className="container-lec3">
        <div className="content-txt">{this.state.num}</div>
          <div className="content-btns">
            <button onClick={this.add}>Add</button>
            <button onClick={this.sub}>Sub</button>
            <button onClick={this.mul}>Mul</button>
            <button onClick={this.div}>Div</button>
            <button onClick={this.reset}>Reset</button>
          </div>
        </div>
      </>
    );
  }
}

export default Lec03_Part01;
