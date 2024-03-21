import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children} (iOS)</Text>;
};

const styles = StyleSheet.create({
  title: {
    borderColor: Colors.white,
    borderWidth: 2,
    // borderWidth: Platform.OS === "ios" ? 2 : 1,
    // borderWidth: Platform.select({ ios: 2, android: 1 }),
    color: Colors.white,
    fontFamily: "open-sans-bold",
    fontSize: 24,
    maxWidth: "90%",
    padding: 12,
    textAlign: "center",
    width: 500,
  },
});

export default Title;
