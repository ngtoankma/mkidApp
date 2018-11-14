import React, {Component} from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import Button from './../common/Button';
import Textinput from './../common/Textinput';






class LoginScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const {params = {}} = navigation.state;
    return {
      headerTitle: 'home'
      ,
      headerStyle: {
        backgroundColor: 'rgba(255.0,255.0,255.0,1.0)'
      },

    };
  };

  render() {
    return (
      <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'white'}}>
       <Text style={styles.red}>login screen  !</Text>
      <Textinput style={styles.input}></Textinput>
       <Button style={{backgroundColor:'red'}}><Text>Login h gggggghh</Text></Button>
 
       
      </View>
    );
  }
}

// const style = StyleSheet.Create({
//   login:{
//     background:'blue'
//   },
// });

const styles = StyleSheet.create({
  bigblue: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  input: {
    width: 50,
    height:200,
    borderRadius:4,
    borderWidth:1,
    borderColor:'red',
    backgroundColor:'red'
  }
});
export default LoginScreen;
