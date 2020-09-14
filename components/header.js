import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todo App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
      height: 50,
      paddingTop: 10,
      backgroundColor: "rgb(29, 113, 170)"
  },
  title: {
      textAlign: "center",
      color: "#fff",
      fontSize: 20,
  }
});

export default Header;
