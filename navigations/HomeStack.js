import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import CustomerScreen from "../screens/home/CustomerScreen";
import ShipperScreen from "../screens/home/ShipperScreen";
import SingleItemScreen from "../screens/home/SingleItemScreen";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Customer"
          component={CustomerScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Shipper"
          component={ShipperScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SingleItem"
          component={SingleItemScreen}
          options={({ route, navigation }) => ({
            title: route.params.item.id,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
