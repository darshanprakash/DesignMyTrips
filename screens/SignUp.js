import * as React from "react";
import { StyleSheet, Image, View, Button, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SignUp({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={styles.Input}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Enter username or Email"
          placeholderTextColor="grey"
        />
      </View>
      <View style={styles.Input}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Enter Password"
          placeholderTextColor="grey"
        />
      </View>
      <TouchableOpacity
        style={styles.submitSignUp}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.submitSignUpText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Input: {
    width: 250,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
    marginHorizontal: 50,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 1,
    marginTop: 15,
    marginBottom: 15,
    justifyContent: "center",
    borderRadius: 20,
  },
  submitSignUp: {
    width: 150,
    height: 40,
    marginTop: 15,
    backgroundColor: "#2374BB",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
  },
  submitSignUpText: {
    color: "#fff",
    textAlign: "center",
  },
});
