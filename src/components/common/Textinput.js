import React from 'react';
import { TouchableOpacity, StyleSheet,TextInput,Dimensions ,Text} from 'react-native';
width = Dimensions.get('window').width-10;
const Textinput = ({ styles }) => {
  if (!styles) {
    styles = {
      borderRadius:4,
      borderWidth:1,
      borderColor:'red',
      backgroundColor:'blue',
      width:width,
    };
  } else {

  }
  if(!styles.hasOwnProperty('justifyContent')) {
    styles.justifyContent = 'center';
  }
  if(!styles.hasOwnProperty('alignSelf')) {
    styles.alignSelf = 'center';
  }

  return (
  
    <TextInput  style={styles}>
<Text>{width}</Text>
    </TextInput>

  );
};

export default Textinput;
