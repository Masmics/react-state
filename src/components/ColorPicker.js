import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';

export default class ColorPicker extends PureComponent {

  static propTypes = {
    colorHandler: PropTypes.func.isRequired
  }

  render() {
    return (
      <section className={styles.ColorPicker}>
        <button className={styles.red} onClick={() => { this.props.colorHandler('red'); }}>Red</button>
        <button className={styles.yellow} onClick={() => { this.props.colorHandler('yellow'); }}>Yellow</button>
        <button className={styles.blue} onClick={() => { this.props.colorHandler('blue'); }}>Blue</button>
      </section>
    );
  }
}

