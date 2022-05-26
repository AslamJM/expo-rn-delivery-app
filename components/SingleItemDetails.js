import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors, dimensions } from "../utils/globalStyles";

const SingleItemDetails = () => {
  return (
    <View>
      <View style={styles.image}></View>
      <View>
        <Text style={{ fontWeight: "700", marginVertical: 6, fontSize: 18 }}>
          Birthday Gift
        </Text>
        <Text style={{ fontSize: 17, color: "#303030" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          necessitatibus, ducimus vero
        </Text>
        <View>
          <View style={styles.details}>
            <Text style={styles.detailsLeft}>Quantity:</Text>
            <Text style={styles.cols}>2</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailsLeft}>Size:</Text>
            <Text style={styles.cols}>50*40*60 cm</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailsLeft}>Weight</Text>
            <Text style={styles.cols}>5 kg</Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <View style={styles.bottomRow}>
          <View style={styles.bottomCol}>
            <Text style={styles.bottomColTitle}>Pickup</Text>
            <Text style={{ fontSize: 17, color: "#303030" }}>
              Al salah, Alshatabi,40008, Kuwait
            </Text>
          </View>
          <View style={styles.bottomCol}>
            <Text style={styles.bottomColTitle}>Delivery</Text>
            <Text style={{ fontSize: 17, color: "#303030" }}>
              Al salah, Alshatabi,40008, Kuwait
            </Text>
          </View>
        </View>
        <View style={styles.bottomRow}>
          <View style={styles.bottomCol}>
            <Text style={styles.bottomColTitle}>Sender</Text>
            <Text style={{ fontSize: 17, color: "#303030" }}>
              Muhammed Salah +9634545455345
            </Text>
          </View>
          <View style={styles.bottomCol}>
            <Text style={styles.bottomColTitle}>Reciever</Text>
            <Text style={{ fontSize: 17, color: "#303030" }}>
              Muhammed Salah +9634545455345
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SingleItemDetails;

const styles = StyleSheet.create({
  image: {
    height: 150,
    backgroundColor: "#303030",
    marginVertical: 8,
    borderRadius: 8,
  },
  details: {
    flexDirection: "row",
    marginVertical: 4,
  },
  detailsLeft: {
    flex: 1,
    color: colors.main,
    fontSize: 17,
  },
  cols: {
    flex: 1,
    fontSize: 17,
  },
  bottomRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  bottomCol: {
    flex: 1,
  },
  bottomColTitle: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 5,
    fontSize: 18,
  },
});
