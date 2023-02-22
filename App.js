import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useState, useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

import {
  useFonts,
  Labrada_100Thin,
  Labrada_200ExtraLight,
  Labrada_300Light,
  Labrada_400Regular,
  Labrada_500Medium,
  Labrada_600SemiBold,
  Labrada_700Bold,
  Labrada_800ExtraBold,
  Labrada_900Black,
  Labrada_100Thin_Italic,
  Labrada_200ExtraLight_Italic,
  Labrada_300Light_Italic,
  Labrada_400Regular_Italic,
  Labrada_500Medium_Italic,
  Labrada_600SemiBold_Italic,
  Labrada_700Bold_Italic,
  Labrada_800ExtraBold_Italic,
  Labrada_900Black_Italic,
} from "@expo-google-fonts/labrada";
import { Children } from "react/cjs/react.production.min";

let choiceSize = 150;

export default function App() {
  let [fontsLoaded] = useFonts({
    Labrada_100Thin,
    Labrada_200ExtraLight,
    Labrada_300Light,
    Labrada_400Regular,
    Labrada_500Medium,
    Labrada_600SemiBold,
    Labrada_700Bold,
    Labrada_800ExtraBold,
    Labrada_900Black,
    Labrada_100Thin_Italic,
    Labrada_200ExtraLight_Italic,
    Labrada_300Light_Italic,
    Labrada_400Regular_Italic,
    Labrada_500Medium_Italic,
    Labrada_600SemiBold_Italic,
    Labrada_700Bold_Italic,
    Labrada_800ExtraBold_Italic,
    Labrada_900Black_Italic,
  });

  let onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        Who is the Joker's girlfriend slash ex-girlfriend?
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Choice
            image={require("./assets/harley-quinn.webp")}
            label="Harley Quinn"
          />
          <Choice
            image={require("./assets/poison-ivy.jpg")}
            label="Poison Ivy"
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Choice image={require("./assets/batgirl.png")} label="Batgirl" />
          <Choice image={require("./assets/catwoman.webp")} label="Catwoman" />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

function Choice(props) {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#eeddee"
      onPress={() => {
        // alert("Pressed!");
      }}
      style={{
        margin: 20,
      }}
    >
      <View>
        <Image
          source={props.image}
          style={styles.choice}
          clip={{
            height: choiceSize,
            width: choiceSize,
          }}
        />
        <Text style={styles.choiceLabel}>{props.label}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  question: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    fontFamily: "Labrada_400Regular",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  choice: {
    resizeMode: "cover",
    height: choiceSize,
    width: choiceSize,
    borderRadius: 9,
  },
  choiceLabel: {
    fontSize: 16,
    color: "#444444",
    fontFamily: "Labrada_400Regular",
    // alignContent: "center",
    alignSelf: "center",
    // alignItems: "center",
    // justifyContent: "center",
    paddingBottom: 12,
  },
});
