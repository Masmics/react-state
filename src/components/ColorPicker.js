import React, { PureComponent } from 'react';
import styles from './ColorPicker.css';

export default class ColorPicker extends PureComponent {
  state = {
    color: ''
  };

  clickHandler = color => {
    this.setState({ color });
  }

  render() {
    const { color } = this.state;
    return (
      <section className={styles.ColorPicker}>
        <button className={styles.red} onClick={this.clickHandler.bind(null, 'red')}>Red</button>
        <button className={styles.yellow} onClick={this.clickHandler.bind(null, 'yellow')}>Yellow</button>
        <button className={styles.blue} onClick={this.clickHandler.bind(null, 'blue')}>Blue</button>
        <div className={styles[color]}></div>
      </section>
    );
  }
}

