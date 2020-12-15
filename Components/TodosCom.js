import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { deletetodo } from "../Store/Actions";

export default function TodosCom({ item }) {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => dispatch(deletetodo(item.key))}
      style={styles.todos}
    >
      <Text style={styles.txt}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todos: {
    padding: 15,
    marginTop: 16,
    backgroundColor: "#f9c2ff",
    borderRadius: 50,
    width: "80%",
    alignSelf: "center",
    marginVertical: "5%",
  },
  txt: {
    fontSize: 23,

    fontWeight: "bold",
    textAlign: "center",
  },
});
