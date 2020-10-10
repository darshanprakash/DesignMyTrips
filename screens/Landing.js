import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  Animated,
  TouchableHighlight,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CategoryLanding from "./components/Explore/CategoryLanding";
const { height, width } = Dimensions.get("window");

class Landing extends Component {
  componentDidMount() {
    this.scrollY = new Animated.Value(0);

    this.startHeaderHeight = 80;
    this.endHeaderHeight = 50;
    if (Platform.OS == "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
      this.endHeaderHeight = 70 + StatusBar.currentHeight;
    }

    this.animatedHeaderHeight = this.scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [this.startHeaderHeight, this.endHeaderHeight],
      extrapolate: "clamp",
    });

    this.animatedOpacity = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });

    this.animatedMarginTop = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [50, 30],
      extrapolate: "clamp",
    });
  }

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <View style={{ flex: 1 }}>
          <Animated.View
            style={{
              height: this.animatedHeaderHeight,
              backgroundColor: "#fff",
              borderBottomWidth: 1,
              borderBottomColor: "white",
            }}
          >
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.navigate("Plan")}
            >
              <View style={styles.searchBar}>
                <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
                <Text style={styles.searchBarText}>Pick a place to start</Text>
              </View>
            </TouchableWithoutFeedback>
          </Animated.View>
          {/* <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: this.scrollY } } }],
              { useNativeDriver: false }
            )}
            showsVerticalScrollIndicator={false}
          ></ScrollView> */}
          <CategoryLanding navigation={this.props.navigation} />
        </View>
      </SafeAreaView>
    );
  }
}
export default Landing;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 1,
    marginHorizontal: 50,
    marginTop: Platform.OS == "android" ? 50 : 15,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  searchBarText: {
    color: "grey",
    fontWeight: "700",
    backgroundColor: "white",
  },
});
