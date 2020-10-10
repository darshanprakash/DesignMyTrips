import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class Category2 extends Component {
  render() {
    return (
      <View
        style={{
          height: this.props.height,
          width: 270,
          marginLeft: 20,
          borderWidth: 0.5,
          borderColor: "black",
          borderRadius: 10,
        }}
      >
        <View style={{ flex: 5 }}>
          <Image
            source={this.props.imageUri}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "cover",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            paddingLeft: 10,
            paddingTop: 10,
            backgroundColor: "#262626",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "500", color: "white" }}>
            {this.props.name}
          </Text>
        </View>
      </View>
    );
  }
}
export default Category2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
