import React, { useState } from "react";
import { ScrollView, Text } from 'react-native';
import firestore from "@react-native-firebase/firestore";
import { StyleSheet } from "react-native";
import { Appbar, TextInput, Button } from 'react-native-paper';


const Todo = () =>{
    const [ todo, setTodo ] = useState('');

    const ref = firestore().collection('todos');

    async function addTodo() {
        try {
            console.log("hi there")
            const refa = await ref.add({
              title: todo,
              complete: false,
            });
            
        } catch (error) {
            console.log(error)
            
        }
       
        console.log("dodois Set now")
        // console.log(refa)
        setTodo('');
      }
    return (
        <>
          <Appbar>
            <Appbar.Content title={'TODOs List'} />
          </Appbar>
          <ScrollView style={{flex: 1}}>
            <Text>List of TODOs!</Text>
          </ScrollView>
          <TextInput label={'New Todo'} value={todo} onChangeText={setTodo} />
            <Button onPress={() => addTodo()}>Add TODO</Button>
        </>
      );
}


export default Todo;
const styles = StyleSheet.create({

})