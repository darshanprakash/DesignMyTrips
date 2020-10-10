import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
class Homes extends Component {
  render() {
    return (
      <View
        style={{
          width: this.props.width - 40,
          height: this.props.width / 3 - 30,
          flexDirection: "row",
        }}
      >
        <View>
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: "cover",
              borderRadius: 10,
            }}
            source={require("../../../assets/Home.jpeg")}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            paddingLeft: 10,
            marginTop: 15,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {this.props.name}
          </Text>
          <Text style={{ marginTop: 5 }}>
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>
              ${this.props.price}
            </Text>
            <Text style={{ fontSize: 12 }}>/night avg.</Text>
          </Text>
        </View>
      </View>
    );
  }
}
export default Homes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
