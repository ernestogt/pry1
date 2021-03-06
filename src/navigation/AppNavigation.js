import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Principal from "../components/principal";
import { createStackNavigator } from "@react-navigation/stack";
import Categoria from "../components/categoria";
import EscogeJuego from "../components/escogeJuego";
import RNBootSplash from "react-native-bootsplash";
import Juego from "../components/juego";
import Color4 from "../components/color4";
import { StyleSheet } from "react-native";

import { human, systemWeights, materialColors } from "react-native-typography";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <Stack.Navigator
        initialRouteName="Principal"
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#4177EB", //Set Header color
            borderColor: "#ffffff",
          },
          headerTitleStyle: {
            ...styles.text,
          },
        }}
      >
        <Stack.Screen
          name="Principal"
          component={Principal}
          options={{
            title: "Escoge tu edad",
          }}
        />
        <Stack.Screen
          name="Categoria"
          component={Categoria}
          options={{
            title: "Escoge la categoría",
          }}
        />
        <Stack.Screen
          name="EscogeJuego"
          component={EscogeJuego}
          options={{
            title: "Escoge el juego",
          }}
        />
        <Stack.Screen
          name="Juego"
          component={Juego}
          options={{
            title: "Juego",
          }}
        />
        <Stack.Screen name="color4" component={Color4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    ...human.title2,
    ...systemWeights.semibold,
    color: materialColors.whiteSecondary,
  },
});
