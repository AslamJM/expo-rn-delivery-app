import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { colors } from "../../utils/globalStyles";

const UploadScreen = () => {
  const [image, setImage] = useState(null);
  const [date, setDate] = useState(new Date(1652709677987));

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={pickImage}>
        <View style={styles.imagepick}>
          <Text style={{ fontSize: 18 }}>upload a shipment photo</Text>
        </View>
      </TouchableOpacity>
      <KeyboardAvoidingView>
        <TextInput placeholder="Title" style={styles.inputFull} />
      </KeyboardAvoidingView>
      <KeyboardAvoidingView>
        <TextInput placeholder="Description" style={styles.inputFull} />
      </KeyboardAvoidingView>
      <View style={styles.lengthContainer}>
        <TextInput placeholder="Length" style={styles.lengthItem} />
        <TextInput placeholder="Width" style={styles.lengthItem} />
        <TextInput placeholder="Height" style={styles.lengthItem} />
      </View>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 5 }}>
          Pickup
        </Text>
        <View
          style={{ height: 1, backgroundColor: "#707070", marginVertical: 5 }}
        />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ flex: 1, fontSize: 18 }}>{date.toLocaleString()}</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 18, color: colors.main, flex: 1 }}>
              Set Date
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "#fff",
  },
  imagepick: {
    height: 200,
    borderWidth: 1,
    borderColor: "#303030",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  inputFull: {
    backgroundColor: "#dbe3e6",
    paddingVertical: 10,
    fontSize: 18,
    paddingHorizontal: 5,
    marginVertical: 10,
    borderRadius: 5,
  },
  lengthContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },
  lengthItem: {
    marginRight: 5,
    backgroundColor: "#dbe3e6",
    borderRadius: 5,
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 5,
    width: "25%",
  },
});
