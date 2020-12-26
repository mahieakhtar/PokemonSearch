import React, { useState } from "react";
import { Text, View, Platform } from "react-native";
import Landing from "./Landing";
import Search from "./Search";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("landing");
  const switchScreen = (currentScreen) => {
    setCurrentScreen({ currentScreen });
  };

  const renderScreen = () => {
    if (currentScreen === "landing") {
      return <Landing switchScreen={switchScreen} />;
    } else if (currentScreen === "Search") {
      return <Search />;
    }
  };
  return <View style={styles.container}>{renderScreen()}</View>;
}
const styles = {
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 0,
  },
};
