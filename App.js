import { StyleSheet, Text, View } from 'react-native'
import React from 'react' 
import Todo from './Screens/Todo'
const App = () =>{
  return(
    <Todo/>
  )
} 
const styles = StyleSheet.create({
  mainContainer:{
    flex:1
  }
})
export default App;