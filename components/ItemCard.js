import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../utils/globalStyles";
import { AntDesign } from "@expo/vector-icons";

const ItemCard = ({ id }) => {
  return (
    <View style={styles.card}>
      <View style={styles.image}></View>
      <View style={styles.middle}>
        <Text style={styles.id}>{id}</Text>
        <Text style={styles.title}>KWD 450</Text>
        <Text style={styles.category}>Computer Desktop</Text>
        <Text style={styles.status}>In Transits</Text>
      </View>
      <View style={styles.right}>
        <View style={styles.count}>
          <Text style={styles.num}>3</Text>
        </View>
        <AntDesign name="right" size={24} color="black" />
      </View>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  card: {
    height: 100,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    elevation: 1,
    borderRadius: 5,
  },
  image: {
    flex: 3,
    backgroundColor: "#707070",
    borderRadius: 5,
    width: "100%",
    height: "100%",
  },
  middle: {
    justifyContent: "space-around",
    flex: 7,
    height: "100%",
    paddingHorizontal: 10,
  },
  id: {
    fontSize: 14,
    color: "#303030",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  category: {
    fontSize: 15,
    color: "#303030",
  },
  status: {
    fontSize: 15,
    color: colors.main,
  },
  right: {
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
    height: "100%",
    flexDirection: "row",
  },
  count: {
    backgroundColor: "red",
    borderRadius: 13,
    width: 26,
    height: 26,
    alignItems: "center",
    justifyContent: "center",

    marginRight: 5,
  },
  num: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});
