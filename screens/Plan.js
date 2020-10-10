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
  FlatList,
} from "react-native";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
const { height, width } = Dimensions.get("window");

class Plan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.makeRemoteRequest();

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

  makeRemoteRequest = () => {
    // const url = `https://randomuser.me/api/?&results=20`;
    // this.setState({ loading: true });

    // fetch(url)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     this.setState({
    //       data: res.results,
    //       error: res.error || null,
    //       loading: false,
    //     });
    //     this.arrayholder = res.results;
    //   })
    //   .catch((error) => {
    //     this.setState({ error, loading: false });
    //   });

    // const fs = require("fs");
    this.arrayholder = require("../assets/cities.json");
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "lightgrey",
          marginHorizontal: 30,
        }}
      />
    );
  };

  searchFilterFunction = (text) => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter((item) => {
      const itemData = `${item.city.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

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
            <View style={styles.searchBar}>
              <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
              <TextInput
                autoFocus={true}
                underlineColorAndroid="transparent"
                placeholder="Pick a place to start "
                placeholderTextColor="grey"
                style={styles.searchTextInput}
                onChangeText={(text) => this.searchFilterFunction(text)}
                autoCorrect={false}
                value={this.state.value}
              />
            </View>
          </Animated.View>
          <View style={styles.searchList}>
            <FlatList
              data={this.state.data}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <Text style={styles.listItems}>
                    {item.city} {item.state}
                  </Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.city}
              ItemSeparatorComponent={this.renderSeparator}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default Plan;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
    marginHorizontal: 50,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 1,
    marginTop: Platform.OS == "android" ? 50 : 15,
    marginBottom: 15,
    justifyContent: "center",
    borderRadius: 20,
  },
  searchTextInput: {
    fontWeight: "700",
    backgroundColor: "white",
  },
  searchList: {
    height: 150,
  },
  listItems: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
});
