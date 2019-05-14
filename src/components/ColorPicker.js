import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';

function ColorPicker({ colorHandler }){
  return (
    <section className={styles.ColorPicker}>
      <button className={styles.red} onClick={() => colorHandler('red')}>Red</button>
      <button className={styles.yellow} onClick={() => colorHandler('yellow')}>Yellow</button>
      <button className={styles.blue} onClick={() => colorHandler('blue')}>Blue</button>
    </section>
  );
}

ColorPicker.propTypes = {
  colorHandler: PropTypes.func.isRequired
};

export default ColorPicker;

