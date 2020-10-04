import React from 'react';
import { View, FlatList, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard, LogBox } from 'react-native';
import AddTodo from './addTodo';
import Header from './header';
import TodoList from './todoList';

const Todo = () => {
  LogBox.ignoreAllLogs()
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      text: 'Buy the tea',
    },
    {
      id: 2,
      text: 'Learn react-native',
    },
    {
      id: 3,
      text: 'Lets coding',
    },
  ]);

  const removeItem = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id != id);
    });
  };

  const handleText = (val) => {

    if(val.length > 3) {
      setTodos((prevTodos) => {
        return [
         { text: val, id: Math.random().toString()},
         ...prevTodos
        ]
      })
    } else {
      Alert.alert("Opps !", "Todos must be over 3 chars long", [
        {
          text: "Close",
          onPress: () => console.log("alert closed")
        }
      ])
    }
  }

return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }} >
      <View style={styles.container}>
      <Header />
      <View style={styles.content}>
      <AddTodo pressText={handleText} />
        <FlatList
          style={styles.list}
          data={todos}
          renderItem={({item}) => {
            if(todos.length <= 0) {
              return <Text>Todo is Empty , please make a todo !</Text>
            } else {
              return  <TodoList handlePress={removeItem} item={item} />
            }
          }}
        />
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
