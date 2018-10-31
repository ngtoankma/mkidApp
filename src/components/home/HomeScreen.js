import React, {Component} from 'react';
import { Text, View } from 'react-native';





class HomeScreen extends Component {

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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home screen  fffff!</Text>
      </View>
    );
  }
}

export default HomeScreen;
