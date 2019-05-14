import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';

export default class ColorPicker extends PureComponent {
  static proptypes = {
    color: PropTypes.string.isRequired
  }

  render() {
    return (
      <section className={styles.ColorPicker}>
        <h2> Color: </h2>
        <h3>this.props.color</h3>
      </section>
    );
  }
}

