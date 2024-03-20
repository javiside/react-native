import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const GoalInput = ({ setGoals }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [goalText, setGoalText] = useState("");

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const addGoalHandler = () => {
    setGoals((currGoals) => [
      ...currGoals,
      { text: goalText, id: `${goalText}-${Math.random()}` },
    ]);
    setGoalText("");
    closeModal();
  };

  const goalInputHandler = (text) => {
    setGoalText(text);
  };

  return (
    <>
      <Pressable onPress={openModal}>
        <Text style={[styles.button, styles.newButton]}>Add New Goal</Text>
      </Pressable>
      <Modal animationType="slide" visible={isModalVisible}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/goal.png")}
          />
          <TextInput
            onChangeText={goalInputHandler}
            placeholder="Your course goals"
            style={styles.textInput}
            value={goalText}
          />
          <View style={styles.buttonsContainer}>
            <Pressable onPress={closeModal}>
              <Text style={[styles.button, styles.cancelButton]}>Cancel</Text>
            </Pressable>
            <Pressable onPress={addGoalHandler}>
              <Text style={[styles.button, styles.addButton]}>Add Goal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    backgroundColor: "#311b6b",
    flex: 1,
    gap: 12,
    justifyContent: "center",
    position: "relative",
  },
  image: {
    height: 100,
    margin: 20,
    width: 100,
  },
  textInput: {
    backgroundColor: "#e4d0ff",
    borderColor: "#e4d0ff",
    borderRadius: 6,
    borderWidth: 1,
    color: "#120438",
    marginRight: 8,
    padding: 12,
    width: "70%",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "center",
    width: "70%",
  },
  button: {
    color: "white",
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
    textTransform: "uppercase",
  },
  newButton: {
    backgroundColor: "#8539ea",
  },
  cancelButton: {
    backgroundColor: "#f31282",
  },
  addButton: {
    backgroundColor: "#5e0acc",
  },
});
