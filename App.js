import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList,
  Text,
} from "react-native";
import ChatBox from "./components/ChatBox";
import Navbar from "./components/Navbar";

export default function App() {
  const [messages, setMessages] = useState([
    { text: "Hello", key: "1" },
    { text: "Call me soon", key: "2" },
  ]);
  const submitHandler = (text) => {
    setMessages((prevMessages) => {
      return [{ text: text, key: Math.random().toString() }, ...prevMessages];
    });
  };
  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.content}>
        <FlatList
          data={messages}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.text}</Text>
          )}
        />
        <ChatBox submitHandler={submitHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 10,
    marginTop: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "#777",
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "aliceblue",
    fontSize: 15,
    marginHorizontal: 10,
  },
});
