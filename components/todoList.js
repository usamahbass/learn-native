import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from "react-native"

const TodoList = ({ handlePress, item }) => {
    return (
       <TouchableOpacity onPress={() => handlePress(item.id)} key={item.id} >
           <Text style={styles.item} >{item.text}</Text>
       </TouchableOpacity>
    )
}

export default TodoList

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: 'rgb(29, 113, 170)',
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 1,
        borderRadius: 10,
    }
})