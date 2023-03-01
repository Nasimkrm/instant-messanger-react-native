import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Navbar() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Blinker</Text>
      {/* <Text style={styles.title}>Login</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    padding: 20,

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    backgroundColor: "blue",
    borderRadius: "50%",
    textAlign: "left",
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    padding: "10px",
  },
});
