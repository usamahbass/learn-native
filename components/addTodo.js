import React from 'react'
import { TextInput, View, StyleSheet, Button } from 'react-native'

const AddTodo = ({pressText}) => {
    const [text, setText] = React.useState("")

    const handleText = (val) => {
        setText(val)
    }

    return (
       <View>
           <TextInput style={styles.input} placeholder="add new todo ..." onChangeText={handleText} />
           <Button onPress={() => pressText(text)} title="add Todo" />
       </View>
    )
}

export default AddTodo

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    }
})
