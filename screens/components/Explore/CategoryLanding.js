import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Tou,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";

export default function Example({ navigation }) {
  const [items, setItems] = React.useState([
    { name: "Nature", code: "#1abc9c" },
    { name: "Food", code: "#2ecc71" },
    { name: "Night Life", code: "#3498db" },
    { name: "Art", code: "#9b59b6" },
    { name: "Festivals", code: "#34495e" },
    { name: "Sports", code: "#16a085" },
    { name: "Streets", code: "#27ae60" },
    { name: "Resort", code: "#2980b9" },
    { name: "People", code: "#8e44ad" },
    { name: "Action", code: "#2c3e50" },
    { name: "Urban", code: "#f1c40f" },
    { name: "Beach", code: "#e67e22" },
  ]);

  return (
    <FlatGrid
      itemDimension={100}
      data={items}
      style={styles.gridView}
      // staticDimension={90}
      //   fixed
      spacing={15}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("Plan")}>
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
  },
});
