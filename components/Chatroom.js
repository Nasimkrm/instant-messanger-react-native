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
