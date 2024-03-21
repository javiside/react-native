import { StyleSheet, View, useWindowDimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Card from "../ui/Card";
import InstructionText from "../ui/InstructionText";
import NumberContainer from "./NumberContainer";
import PrimaryButton from "../ui/PrimaryButton";

const GameScreenContent = ({ currentGuess, onNextGuess }) => {
  const { height } = useWindowDimensions();

  const lowerButton = (
    <View style={styles.button}>
      <PrimaryButton onPress={onNextGuess("lower")}>
        <Ionicons name="remove" size={24} />
      </PrimaryButton>
    </View>
  );
  const greaterButton = (
    <View style={styles.button}>
      <PrimaryButton onPress={onNextGuess("greater")}>
        <Ionicons name="add" size={24} />
      </PrimaryButton>
    </View>
  );
  return height > 500 ? (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          {lowerButton}
          {greaterButton}
        </View>
      </Card>
    </>
  ) : (
    <View style={styles.buttonsContainer}>
      {lowerButton}
      <NumberContainer>{currentGuess}</NumberContainer>
      {greaterButton}
    </View>
  );
};

const styles = StyleSheet.create({
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});

export default GameScreenContent;
