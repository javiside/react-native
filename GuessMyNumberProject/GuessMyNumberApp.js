import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { hideAsync, preventAutoHideAsync } from "expo-splash-screen";
import StartGameScreen from "./screens/StartGameScreen";
import { useEffect, useMemo, useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

const GuessMyNumber = () => {
  const [guessRounds, setGuessRounds] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [userNumber, setUserNumber] = useState();

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  const startNewGameHandler = () => {
    setGuessRounds(0);
    setIsGameOver(false);
    setUserNumber(null);
  };

  const gameOverHandler = (numberOfRounds) => {
    setGuessRounds(numberOfRounds);
    setIsGameOver(true);
  }

  const screen = useMemo(() => {
    if (isGameOver) {
      return (
        <GameOverScreen
          onStartNewGame={startNewGameHandler}
          roundsNumber={guessRounds}
          userNumber={userNumber}
        />
      );
    }
    return userNumber ? (
      <GameScreen onGameOver={gameOverHandler} userNumber={userNumber} />
    ) : (
      <StartGameScreen onPickNumber={pickedNumberHandler} />
    );
  }, [guessRounds, isGameOver, userNumber]);

  useEffect(() => {
    const prepare = async () => {
      await preventAutoHideAsync();
    };
    prepare();
  }, []);

  if (fontsLoaded) {
    hideAsync();
  } else {
    return null;
  }

  return (
    <LinearGradient
      colors={[Colors.primary600, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        imageStyle={styles.image}
        resizeMode="cover"
        source={require("./assets/images/background.png")}
        style={styles.rootScreen}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  image: {
    opacity: 0.2,
  },
});

export default GuessMyNumber;
