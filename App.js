import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import AddTodo from './components/addTodo';
import Header from './components/header';
import TodoList from './components/todoList';

const App = () => {
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
      alert("Please fill the form, min 4 carachters !")
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
      <AddTodo pressText={handleText} />
        <FlatList
          style={styles.list}
          data={todos}
          renderItem={({item}) => (
            <TodoList handlePress={removeItem} item={item} />
          )}
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
