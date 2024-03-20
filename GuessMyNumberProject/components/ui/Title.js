import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    borderColor: Colors.white,
    borderWidth: 2,
    color: Colors.white,
    fontFamily: "open-sans-bold",
    fontSize: 24,
    padding: 12,
    textAlign: "center",
  },
});

export default Title;
