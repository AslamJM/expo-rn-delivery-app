import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
} from "react-native";
import { colors } from "../../utils/globalStyles";
import BiddersCard from "../../components/BiddersCard";
import { useHeaderHeight } from "@react-navigation/elements";
import SingleItemDetails from "../../components/SingleItemDetails";

const SingleItemScreen = ({ route }) => {
  const [active, setActive] = useState(0);
  const { id } = route.params.item;
  const headerHeight = useHeaderHeight();

  const styles = StyleSheet.create({
    top: {
      flex: 1,
      paddingHorizontal: 15,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 7,
    },
    outer: {
      flex: 1,
    },
    main: {
      height: "100%",
    },
    btnLeft: {
      paddingVertical: 10,
      backgroundColor: active == 0 ? colors.main : "#fff",
      borderWidth: 1,
      borderColor: colors.main,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    textLeft: {
      fontSize: 16,
      fontWeight: "500",
      color: active == 0 ? "#fff" : "#000",
    },
    btnRight: {
      paddingVertical: 10,
      backgroundColor: active == 1 ? colors.main : "#fff",
      borderWidth: 1,
      borderColor: colors.main,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    textRight: {
      fontSize: 16,
      fontWeight: "500",
      color: active == 1 ? "#fff" : "#000",
    },
    body: {
      flex: 15,
      paddingHorizontal: 15,
    },
  });

  return (
    <View style={styles.outer}>
      <View style={styles.main}>
        <View style={styles.top}>
          <TouchableOpacity style={styles.btnLeft} onPress={() => setActive(0)}>
            <Text style={styles.textLeft}>Bids</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnRight}
            onPress={() => setActive(1)}
          >
            <Text style={styles.textRight}>ShipmentDetails</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          {active == 0 ? <BiddersCard /> : <SingleItemDetails />}
        </View>
      </View>
    </View>
  );
};

export default SingleItemScreen;
