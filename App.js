import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { Colors } from "./constants/colors";
export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };
  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
        source={require("./assets/images/background.png")}
      >
        <SafeAreaView style={styles.rootScreen}>
          {userNumber ? (
            <GameScreen userNumber={userNumber} />
          ) : (
            <StartGameScreen pickedNumberHandler={pickedNumberHandler} />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.5,
  },
});
