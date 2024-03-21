import { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import GuessLogItems from "../components/game/GuessLogItem";
import GameScreenContent from "../components/game/GameScreenContent";
import Sizes from "../constants/sizes";

const generateRandom = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  return rndNum === exclude ? generateRandom(min, max, exclude) : rndNum;
};

let maxBoundary = 100;
let minBoundary = 1;

const GameScreen = ({ onGameOver, userNumber }) => {
  const initialGuess = generateRandom(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const roundsLength = guessRounds.length;

  const { height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(roundsLength);
      maxBoundary = 100;
      minBoundary = 1;
    }
  }, [currentGuess, onGameOver, roundsLength, userNumber]);

  const nextGuessHandler = (direction) => () => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", "You know this is wrong...", [
        { text: "Ok", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandom(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  };
  const paddingTop = height > Sizes.medium ? "20%" : "5%";
  return (
    <View style={[styles.gameScreen, { paddingTop }]}>
      <Title>Opponent&#39;s Guess</Title>
      <GameScreenContent
        currentGuess={currentGuess}
        onNextGuess={nextGuessHandler}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          // keyExtractor={(item) => item}
          renderItem={({ index, item }) => (
            <GuessLogItems roundNumber={roundsLength - index} guess={item} />
          )}
        ></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameScreen: {
    alignItems: "center",
    flex: 1,
    padding: 8,
    // paddingTop: "20%",
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});

export default GameScreen;
