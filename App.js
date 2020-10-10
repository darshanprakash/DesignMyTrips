import React from "react";
import { StyleSheet, Image, View, Button, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome } from "@expo/vector-icons";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Landing from "./screens/Landing";
import Plan from "./screens/Plan";
import Saved from "./screens/Saved";
import Inbox from "./screens/Inbox";
import Trips from "./screens/Trips";
import Profile from "./screens/Profile";
import { TouchableOpacity } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Landing") {
            iconName = focused ? "search" : "search-plus";
          } else if (route.name === "Saved") {
            iconName = focused ? "heart" : "heart-o";
          } else if (route.name === "Trips") {
            iconName = focused ? "paper-plane" : "paper-plane-o";
          } else if (route.name === "Inbox") {
            iconName = focused ? "envelope" : "envelope-o";
          } else if (route.name === "Profile") {
            iconName = focused ? "user" : "user-o";
          }
          return <FontAwesome name={iconName} size={size - 4} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#2374BB",
        inactiveTintColor: "gray",
        style: {
          backgroundColor: "white",
          borderTopWidth: 0,
          shadowOffset: { width: 5, height: 3 },
          shadowColor: "black",
          shadowOpacity: 0.5,
          elevation: 5,
        },
        labelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen name="Landing">
        {(props) => <Landing {...props} navigation={navigation} />}
      </Tab.Screen>
      <Tab.Screen name="Saved" component={Saved} />
      <Tab.Screen name="Trips" component={Trips} />
      <Tab.Screen name="Inbox" component={Inbox} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function StartScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        style={styles.submitGuest}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.submitGuestText}>Browse as Guest</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.submitGuest}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={styles.submitGuestText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.submitGuest}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.submitGuestText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

function rootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={StartScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Plan" component={Plan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  submitGuest: {
    width: 150,
    height: 40,
    marginTop: 30,
    backgroundColor: "#2374BB",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
  },
  submitGuestText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default class App extends React.Component {
  render() {
    return rootNavigation();
  }
}
