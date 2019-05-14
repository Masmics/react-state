import React, { PureComponent } from 'react';

export default class Increment extends PureComponent {
  state = {
    count: 0
  }

  clickHandler = () => {
    this.setState(state => {
      return {
        count: state.count + 1
      };
    });
  }

  render() {
    return (
      <>
        <h2>Click Count: {this.state.count}</h2>
        <button onClick={this.clickHandler}>Add a Click!</button>

      </>
    );
  }
}
