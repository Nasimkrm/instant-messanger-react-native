import { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default function SignUpContainer({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const validateEmail = (val) => {
    if (val.includes("@")) {
      setEmailIsValid(true);
      setEmail(val);
    } else {
      setEmailIsValid(false);
    }
  };

  const validatePassword = (val) => {
    if (val.length >= 8) {
      setPasswordIsValid(true);
      setPassword(val);
    } else {
      setPasswordIsValid(false);
    }
  };

  useEffect(() => {
    if (emailIsValid && passwordIsValid) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [emailIsValid, passwordIsValid]);

  const handlePress = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.navigate("Chatroom");
      })

      .catch(() => console.log("Failed"));
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          onChangeText={validateEmail}
          defaultValue={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          textContentType="password"
          secureTextEntry="true"
          onChangeText={validatePassword}
          defaultValue={password}
        />
        <TouchableOpacity onPress={handlePress} style={styles.button}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F7",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "50%",

    padding: 20,
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 1,
    borderRadius: "10px",
    padding: 20,
    margin: 10,
  },
  button: {
    textAlign: "center",
    backgroundColor: "aliceblue",
    padding: 10,
    marginTop: 20,
  },
});
