import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

const GoalItems = ({ goals, setGoals }) => {
  const deleteGoalHandler = (id) => () => {
    setGoals((currGoals) => [...currGoals].filter((goal) => goal.id !== id));
  };

  return (
    <View style={styles.goalsContainer}>
      <FlatList
        alwaysBounceVertical={false}
        data={goals}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.goalItem}>
            <Pressable
              android_ripple={{ color: "cyan" }}
              onPress={deleteGoalHandler(item.id)}
              style={({ pressed }) => pressed && styles.pressedItem}
            >
              <Text style={styles.goalText}>{item.text}</Text>
            </Pressable>
          </View>
        )}
        // keyExtractor={({ id }) => id}
      ></FlatList>
    </View>
  );
};

export default GoalItems;

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    backgroundColor: "#f3e482",
    borderRadius: 6,
    margin: 8,
  },
  goalText: {
    fontWeight: "bold",
    padding: 8,
    textTransform: "capitalize",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
