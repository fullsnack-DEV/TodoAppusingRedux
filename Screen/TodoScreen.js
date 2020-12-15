import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, StatusBar } from "react-native";
//redux

//component import
import Header from "../Components/Header";
import SearchCom from "../Components/SearchCom";
import TodosCom from "../Components/TodosCom";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const data = useSelector((state) => state.todos);

  // const [todos, settodos] = useState([{ text: "Lets Start", key: "1" }]);

  // const deleteTodo = (key) => {
  //   settodos((todos) => {
  //     return todos.filter((todo) => todo.key != key);
  //   });
  // };

  // const Addtodo = (text) => {
  //   settodos((todos) => {
  //     return [{ text: text, key: Math.random().toString() }, ...todos];
  //   });
  // };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="blue" />
      <Header />
      <SearchCom />
      <View style={styles.todocontainer}>
        <FlatList
          data={data}
          keyExtractor={(data, index) => index.toString()}
          renderItem={({ item }) => <TodosCom item={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  todocontainer: {
    flex: 1,
  },
});
