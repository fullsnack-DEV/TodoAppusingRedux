import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { addtodo } from "../Store/Actions";

export default function SearchCom({}) {
  const [text, settext] = useState(""); //we can also put this state in redux

  const dispatch = useDispatch();

  const Texthandler = (val) => {
    settext(val);
  };

  const presshandler = () => {
    settext("");
    dispatch(addtodo(text));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add todo..."
        placeholderTextColor="#000"
        onChangeText={Texthandler}
        value={text}
      />

      <TouchableOpacity onPress={() => presshandler()} style={styles.btn}>
        <Text style={styles.txt}>Add Todo..</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "20%",
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#44f5",
    width: "80%",
    alignSelf: "center",
  },
  btn: {
    backgroundColor: "#44f2",
    width: "50%",
    alignSelf: "center",
    marginVertical: "5%",
    borderRadius: 50,
    height: "26%",
  },
  txt: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: "5%",
    color: "#000",
  },
});
