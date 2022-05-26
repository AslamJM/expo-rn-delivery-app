import React from "react";
import { colors } from "../../utils/globalStyles";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShipmentScreen from "../customer/ShipmentScreen";
import UploadScreen from "../customer/UploadScreen";
import ProfileScreen from "../customer/ProfileScreen";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

const CustomerScreen = ({ navigation }) => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Shipments"
        children={() => <ShipmentScreen navigation={navigation} />}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SimpleLineIcons
                name="social-dropbox"
                size={30}
                color={colors.main}
              />
            ) : (
              <SimpleLineIcons name="social-dropbox" size={30} color="black" />
            ),
          title: "",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Upload"
        component={UploadScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons
                name="add-circle-outline"
                size={30}
                color={colors.main}
              />
            ) : (
              <Ionicons name="add-circle-outline" size={30} color="black" />
            ),
          title: "",
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person" size={30} color={colors.main} />
            ) : (
              <Ionicons name="person" size={30} color="black" />
            ),
          title: "",
        }}
      />
    </Tabs.Navigator>
  );
};

export default CustomerScreen;
