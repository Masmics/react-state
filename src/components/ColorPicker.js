import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';

function ColorPicker({ color }){
  return (
    <section className={styles.ColorPicker}>
      <button className={styles.red} onClick={() => color('red')}>Red</button>
      <button className={styles.yellow} onClick={() => color('yellow')}>Yellow</button>
      <button className={styles.blue} onClick={() => color('blue')}>Blue</button>
    </section>
  );
}

ColorPicker.propTypes = {
  color: PropTypes.func.isRequired
};

export default ColorPicker;

