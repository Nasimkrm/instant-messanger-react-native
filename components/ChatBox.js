import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function ChatBox({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  const pressHandler = () => {
    submitHandler(text);
  };
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Write Message"
          onChangeText={changeHandler}
        />
        <Button title="Send" color="blue" onPress={pressHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 10,
    marginTop: 20,
    marginHorizontal: 10,
    justifyContent: "flex-end",
  },

  input: {
    padding: 20,
    margin: 10,
  },
});
