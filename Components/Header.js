import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.txt}>TODO APP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: "10%",
    backgroundColor: "#66d2",
    marginVertical: "9%",
  },
  txt: {
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: "6%",
  },
});
