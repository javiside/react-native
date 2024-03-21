import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import Sizes from "../constants/sizes";

const GameOverScreen = ({ onStartNewGame, roundsNumber, userNumber }) => {
  const { height, width } = useWindowDimensions();
  const imageSize = width < Sizes.small || height < Sizes.medium ? 100 : 300;
  const imageStyle = {
    borderRadius: imageSize / 2,
    height: imageSize,
    width: imageSize,
  };
  return (
    <ScrollView style={styles.screen} >
      <View style={styles.rootContainer}>
        <Title>Game Over!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            source={require("../assets/images/success.png")}
            style={styles.image}
          />
        </View>
        <Text style={styles.summaryText}>
          Your Phone needed <Text style={styles.highligh}>{roundsNumber}</Text>{" "}
          rounds to guess the number
          <Text style={styles.highligh}> {userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  imageContainer: {
    borderColor: Colors.primary800,
    borderWidth: 3,
    margin: 28,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    marginBottom: 24,
    textAlign: "center",
  },
  highligh: {
    color: Colors.primary500,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
