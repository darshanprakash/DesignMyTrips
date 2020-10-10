import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class Category extends Component {
  render() {
    return (
      <View
        style={{
          height: 270,
          width: 270,
          marginLeft: 20,
          borderWidth: 0.5,
          borderColor: "#dddddd",
          borderRadius: 10,
        }}
      >
        <View style={{ flex: 2 }}>
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
        <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>
            {this.props.name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              color: "grey",
              marginTop: 10,
            }}
          >
            {this.props.name}
          </Text>
        </View>
      </View>
    );
  }
}
export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
