import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../utils/globalStyles";
import { AntDesign } from "@expo/vector-icons";

const BiddersCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.image}></View>
      <View style={styles.wrapper}>
        <View style={styles.details}>
          <View style={styles.middle}>
            <Text style={styles.id}>Muhammed</Text>
            <Text style={styles.category}>4.5 Major Tunnel</Text>
            <Text style={styles.title}>KWD 450</Text>
          </View>
          <View style={styles.right}>
            <View style={styles.count}>
              <Text style={styles.num}>3</Text>
            </View>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.decline}>
            <Text style={{ color: "red" }}>Decline</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.accept}>
            <Text style={{ color: "#fff" }}>Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BiddersCard;

const styles = StyleSheet.create({
  card: {
    height: 180,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    elevation: 1,
    borderRadius: 5,
  },
  image: {
    flex: 2,
    backgroundColor: "#707070",
    borderRadius: 5,
    width: 25,
    height: 25,
    alignSelf: "flex-start",
  },
  wrapper: {
    flex: 10,
    justifyContent: "space-between",
  },
  details: {
    flex: 9,
    flexDirection: "row",
  },
  btnContainer: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 7,
  },
  decline: {
    borderWidth: 1,
    borderColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    width: "45%",
    paddingVertical: 10,
  },
  accept: {
    backgroundColor: colors.main,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    width: "45%",
    paddingVertical: 10,
  },
  middle: {
    justifyContent: "space-around",
    flex: 9,
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
    flex: 3,
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
