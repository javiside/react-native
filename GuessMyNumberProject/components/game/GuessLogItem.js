import Colors from "../../constants/colors";

const { View, Text, StyleSheet } = require("react-native");

const GuessLogItems = ({ guess, roundNumber }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent&#39;s Guess: {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: Colors.accent500,
    borderColor: Colors.primary800,
    borderRadius: 40,
    borderWidth: 1,
    elevation: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    padding: 8,
    shadowColor: Colors.black,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    width: "100%",
  },
  itemText: {
    fontFamily: "open-sans",
  },
});

export default GuessLogItems;
