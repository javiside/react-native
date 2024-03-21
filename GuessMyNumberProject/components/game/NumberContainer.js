import { Dimensions, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";
import Sizes from "../../constants/sizes";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: Colors.accent500,
    borderRadius: 8,
    borderWidth: 4,
    justifyContent: "center",
    margin: deviceWidth < Sizes.small ? 12 : 24,
    padding: deviceWidth < Sizes.small ? 12 : 24,
  },
  numberText: {
    color: Colors.accent500,
    fontFamily: "open-sans-bold",
    fontSize: deviceWidth < Sizes.small ? 28 : 36,
  },
});

export default NumberContainer;
