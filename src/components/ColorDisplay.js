import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorDisplay.css';

function ColorDisplay({ colorDisp }){
  return (
    <div className={styles.ColorDisplay} style={{ backgroundColor: colorDisp }}>div> 
  );
}

ColorDisplay.propTypes = {
  colorDisp: PropTypes.string.isRequired
};

export default ColorDisplay;

