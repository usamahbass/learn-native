import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
} from 'react-native';

class Splashscreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="rgb(29, 113, 170)" />
        <Text style={styles.title}>Raksye Todo</Text>
        <ActivityIndicator size="large" color="#ffff" />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(29, 113, 170)',
  },

  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '900',
  },
});

export default Splashscreen;
