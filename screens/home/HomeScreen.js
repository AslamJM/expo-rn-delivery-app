import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { colors } from "../../utils/globalStyles";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <View style={styles.top}>
        <Image
          source={require("../../assets/home.png")}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
          }}
        ></Image>
      </View>
      <View style={styles.middle}>
        <Text style={styles.textLeft}>Welcome to</Text>
        <Text style={styles.textRight}>Whopick</Text>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.customerBtn}
          onPress={() => navigation.navigate("Customer")}
        >
          <AntDesign name="gift" size={24} color="#fff" style={styles.icon} />
          <Text style={styles.customerText}>Customer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shipperBtN}>
          <Feather
            name="shopping-cart"
            size={24}
            color={colors.main}
            style={styles.icon}
          />
          <Text style={styles.shipperText}>Shipper</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  top: {
    flex: 8,
  },
  middle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
  },
  textLeft: {
    fontSize: 25,
    fontWeight: "700",
    marginRight: 10,
    letterSpacing: 1,
    color: "#000",
  },
  textRight: {
    fontSize: 25,
    fontWeight: "700",
    letterSpacing: 1,
    color: colors.main,
  },
  bottom: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    marginBottom: 20,
  },
  customerBtn: {
    width: "80%",
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: colors.main,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    flexDirection: "row",
  },
  customerText: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "500",
  },
  shipperBtN: {
    width: "80%",
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.main,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    flexDirection: "row",
  },
  icon: {
    marginRight: 5,
  },
  shipperText: {
    fontSize: 22,
    color: colors.main,
    fontWeight: "500",
  },
});
