import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/GoalInput";
import GoalItems from "./components/GoalItems";

export default function AddGoalsApp() {
  const [goals, setGoals] = useState([]);
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <GoalInput setGoals={setGoals} />
        <GoalItems goals={goals} setGoals={setGoals} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    paddingHorizontal: 16,
    paddingTop: 50,
  },
});
