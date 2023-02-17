import React from "react";
import { Linking, StyleSheet, Text, View } from "react-native";

export default function Navbar() {
  return (
    <View style={styles.header}>
      <Text
        style={styles.title}
        onPress={() => Linking.openURL("http://localhost:19006/")}
      >
        Blinker
      </Text>
      <Text
        style={styles.title}
        onPress={() => Linking.openURL("http://localhost:19006/")}
      >
        Login
      </Text>
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
    textAlign: "left",
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
  },
});
