import React, { PureComponent } from 'react';
import ColorPicker from './ColorPicker';
import ColorDisplay from './ColorDisplay';

export default class App extends PureComponent {
  state = {
    color: ''
  }

  colorSelect = color => {
    this.setState({ color });
  }

  render() {
    const { color } = this.state;

    return (
      <>
        <ColorPicker colorHandler={this.colorSelect} />
        <ColorDisplay color={color} />
      </>
    );
  }

}
