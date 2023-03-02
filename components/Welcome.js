import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Welcome({ navigation }) {
  const signUpHandler = () => {
    navigation.navigate("Sign Up");
  };

  const loginHandler = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={{ ...styles.container }}>
      <Image
        style={{
          width: 370,
          height: 310,
          marginTop: 30,
          marginHorizontal: 10,
          borderRadius: 30,
        }}
        source={require("../assets/socialImage.jpg")}
      />
      <View style={styles.content}>
        <Text style={{ fontSize: 32, fontWeight: 800 }}>Stay connected</Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
          }}
        >
          Join our community today and enjoy endless conversations with your
          favourite people.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: "#fff" }}
            onPress={signUpHandler}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.button,
              background: "rgba(254, 254, 255, 0.78)",
            }}
            onPress={loginHandler}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(166, 130, 80, 0.2)",
  },
  content: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    color: "#00000",
    margin: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    display: "flex",
  },
});
