import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ onPress, children ,styles }) => {
  if (!styles) {
    styles = {};
  } else {

  }
  if(!styles.hasOwnProperty('justifyContent')) {
    styles.justifyContent = 'center';
  }
  if(!styles.hasOwnProperty('alignSelf')) {
    styles.alignSelf = 'center';
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
