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
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Category from "./components/Explore/Category";
import Category2 from "./components/Explore/Category2";
import Homes from "./components/Explore/Homes";
const { height, width } = Dimensions.get("window");
class Explore extends Component {
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
              backgroundColor: "white",
              borderBottomWidth: 1,
              borderBottomColor: "white",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                backgroundColor: "white",
                marginHorizontal: 50,
                shadowOffset: { width: 0, height: 0 },
                shadowColor: "black",
                shadowOpacity: 0.2,
                elevation: 1,
                marginTop: Platform.OS == "android" ? 30 : 15,
                marginBottom: 15,
                justifyContent: "center",
                borderRadius: 20,
              }}
            >
              <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Where are you going? "
                placeholderTextColor="grey"
                style={{
                  fontWeight: "700",
                  backgroundColor: "white",
                }}
              />
            </View>
          </Animated.View>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: this.scrollY } } }],
              { useNativeDriver: false }
            )}
            showsVerticalScrollIndicator={false}
          >
            <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
              <View style={{ paddingHorizontal: 20, marginBottom: 40 }}>
                <View style={{ width: width - 40, height: 400 }}>
                  <Image
                    style={{
                      flex: 1,
                      height: null,
                      width: null,
                      resizeMode: "cover",
                      borderRadius: 15,
                      borderWidth: 1,
                      borderColor: "#dddddd",
                    }}
                    source={require("../assets/home.png")}
                  />
                </View>
              </View>
              <View style={{ height: 270, marginTop: 20, marginRight: 20 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Category
                    imageUri={require("../assets/stays.png")}
                    name="Unique Stays"
                    description="Spaces that are more than just a place to sleep."
                  />
                  <Category
                    imageUri={require("../assets/experiences.png")}
                    name="Online Experiences"
                    description="Unique experiences we can do together, led by a world of hosts."
                  />
                  <Category
                    imageUri={require("../assets/homes.png")}
                    name="Entire homes"
                    description="Comfortable private places, with room for friends or family."
                  />
                </ScrollView>
              </View>
              <View
                style={{ height: 620, marginTop: 20, backgroundColor: "black" }}
              >
                <View
                  style={{ height: 130, marginHorizontal: 20, marginTop: 20 }}
                >
                  <Text
                    style={{ fontSize: 24, fontWeight: "600", color: "white" }}
                  >
                    Broadway Online Experiences
                  </Text>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "400",
                      color: "white",
                      marginTop: 10,
                    }}
                  >
                    Join live, interactive performances and conversations with
                    people from Broadway and beyond. Without leaving home.
                  </Text>
                </View>
                <View style={{ height: 350, marginRight: 20 }}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <Category2
                      imageUri={require("../assets/stays.png")}
                      name="Unique Stays"
                      description="Spaces that are more than just a place to sleep."
                      height={340}
                    />
                    <Category2
                      imageUri={require("../assets/experiences.png")}
                      name="Online Experiences"
                      description="Unique experiences we can do together, led by a world of hosts."
                      height={340}
                    />
                    <Category2
                      imageUri={require("../assets/homes.png")}
                      name="Entire homes"
                      description="Comfortable private places, with room for friends or family."
                      height={340}
                    />
                  </ScrollView>
                </View>
                <TouchableHighlight style={styles.submit} underlayColor="#fff">
                  <Text style={styles.submitText}>Explore all</Text>
                </TouchableHighlight>
              </View>
            </View>
            <View style={{ marginTop: 40, height: 390 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "500",
                  paddingHorizontal: 20,
                }}
              >
                Your next escape
              </Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View
                  style={{
                    paddingHorizontal: 20,
                    marginTop: 20,
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  <Homes width={width} name="Sedona" price={177} />
                  <Homes width={width} name="Flagstaff" price={139} />
                  <Homes width={width} name="Pinetop-Lakeside" price={168} />
                  <Homes width={width} name="Payson" price={153} />
                  <Homes width={width} name="Scottsdale" price={160} />
                  <Homes width={width} name="Williams" price={131} />
                </View>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
export default Explore;

const styles = StyleSheet.create({
  submit: {
    width: 120,
    height: 35,
    marginLeft: 20,
    marginTop: 25,
    backgroundColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  submitText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    paddingTop: 5,
  },
});
