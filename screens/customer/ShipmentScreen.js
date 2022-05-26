import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../../utils/globalStyles";
import ItemCard from "../../components/ItemCard";

const ShipmentScreen = ({ navigation }) => {
  const [active, setActive] = useState(0);

  const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: colors.shade,
    },
    top: {
      flex: 2,
      backgroundColor: "#fff",
      paddingHorizontal: 15,
    },
    title: {
      fontSize: 25,
      fontWeight: "600",
      letterSpacing: 1,
      marginVertical: 10,
      marginTop: 20,
    },
    search: {
      paddingVertical: 10,
      fontSize: 22,
      paddingHorizontal: 10,
      marginVertical: 5,
      borderRadius: 5,
      backgroundColor: colors.shade,
    },
    btnCOntainer: {
      flex: 1,
      paddingHorizontal: 15,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 2,
    },
    btn: {
      backgroundColor: active == 1 ? colors.main : "#fff",
      borderWidth: 1,
      borderColor: colors.main,
      paddingVertical: 10,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    btnLeft: {
      backgroundColor: active == 0 ? colors.main : "#fff",
      borderWidth: 1,
      borderColor: colors.main,
      paddingVertical: 10,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    },
    btnRight: {
      backgroundColor: active == 2 ? colors.main : "#fff",
      borderWidth: 1,
      borderColor: colors.main,
      paddingVertical: 10,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },
    body: {
      flex: 9,
      paddingHorizontal: 15,
    },
  });

  return (
    <View style={styles.main}>
      <View style={styles.top}>
        <Text style={styles.title}>My Shipments</Text>
        <KeyboardAvoidingView>
          <TextInput
            placeholder="Search..."
            placeholderTextColor="#707070"
            style={styles.search}
          />
        </KeyboardAvoidingView>
      </View>
      <View style={styles.btnCOntainer}>
        <TouchableOpacity style={styles.btnLeft} onPress={() => setActive(0)}>
          <Text
            style={{
              color: active == 0 ? "#fff" : "#000",
              fontSize: 16,
              fontWeight: "500",
            }}
          >
            Assigned
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => setActive(1)}>
          <Text
            style={{
              color: active == 1 ? "#fff" : "#000",
              fontSize: 16,
              fontWeight: "500",
            }}
          >
            Pending
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRight} onPress={() => setActive(2)}>
          <Text
            style={{
              color: active == 2 ? "#fff" : "#000",
              fontSize: 16,
              fontWeight: "500",
            }}
          >
            Compeleted
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <FlatList
          data={[{ id: "#4535182" }]}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("SingleItem", { item })}
            >
              <ItemCard id={item.id} />
            </TouchableOpacity>
          )}
        ></FlatList>
      </View>
    </View>
  );
};

export default ShipmentScreen;
