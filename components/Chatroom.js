import { useLayoutEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GiftedChat } from "react-native-gifted-chat";
import { addDoc, collection } from "firebase/firestore";
import { auth, database } from "../config/firebase";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";

export default function Chatroom() {
  const [messages, setMessages] = useState([{}]);
  const navigation = useNavigation();

  const onSignOutHandler = () => {
    signOut(auth).catch((error) => console.log(error));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={onSignOutHandler}
          style={{ marginRight: 10 }}
        >
          <Ionicons name="exit" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const sendHandler = async (val) => {
    const chatData = {
      ...messages,
    };
    setMessages((prevMessages) => GiftedChat.append(prevMessages, val));
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={sendHandler}
      user={{
        _id: 1,
      }}
      placeholder="Type a message"
    />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 20,
//     paddingHorizontal: 10,
//     marginTop: 20,
//     marginHorizontal: 10,
//     justifyContent: "flex-end",
//   },
//   inputContainer: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   input: {
//     flex: 1,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: "#777",
//     borderRadius: 10,
//   },
//   sendIcon: {
//     padding: 10,
//   },

//   rightArrow: {
//     position: "absolute",
//     backgroundColor: "#0078fe",
//     width: 20,
//     height: 25,
//     bottom: 0,
//     borderBottomLeftRadius: 25,
//     right: -10,
//   },
//   rightArrowOverlap: {
//     position: "absolute",
//     backgroundColor: "#eeeeee",
//     width: 20,
//     height: 35,
//     bottom: -6,
//     borderBottomLeftRadius: 18,
//     right: -20,
//   },
//   leftArrow: {
//     position: "absolute",
//     backgroundColor: "#dedede",

//     width: 20,
//     height: 25,
//     bottom: 0,
//     borderBottomRightRadius: 25,
//     left: -10,
//   },
//   leftArrowOverlap: {
//     position: "absolute",
//     backgroundColor: "#eeeeee",

//     width: 20,
//     height: 35,
//     bottom: -6,
//     borderBottomRightRadius: 18,
//     left: -20,
//   },
// });
