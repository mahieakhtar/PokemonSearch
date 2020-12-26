import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { Button } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const myBackground = require("./assets/landing.jpg");

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={myBackground} style={styles.image}>
        <View style={styles.viewStyle}>
          <Text style={styles.titleStyle}>Welcome to PokeSearch</Text>
          <Button
            block={true}
            style={styles.buttonStyle}
            onPress={() => {
              //props.switchScreen("search");
              navigation.navigate("Search");
            }}
          >
            <Text style={styles.buttonText}>Start Searching</Text>
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = {
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 0,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  viewStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  titleStyle: {
    fontSize: 30,
    color: "blue",
    alignItems: "center",
    fontWeight: "bold",
  },
  buttonStyle: {
    margin: 30,
  },
  buttonText: {
    color: "white",
  },
};
