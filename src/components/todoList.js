import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';

const TodoList = ({handlePress, item}) => {
  return (
    <TouchableOpacity onPress={() => handlePress(item.id)} key={item.id}>
      <View style={styles.item}>
        <Text>{item.text}</Text>
        <Icons name="trash-o" size={15} color="#333" />
      </View>
    </TouchableOpacity>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    marginTop: 16,
    borderColor: 'rgb(29, 113, 170)',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 1,
    borderRadius: 10,
  },
});
