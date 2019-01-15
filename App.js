import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <Image
          style={styles.img}
          source={{uri: 'http://vrcpitbull.com/wp-content/uploads/2011/02/VAMPVAMP%E2%80%A2.jpg'}}
        />
        <Text>THIS IS THE COOLEST APP EVER!!!</Text>
        <Text>DEVELOPERS!!DEVELOPERS!!DEVELOPERS!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 200,
    width: 200
  }
});
