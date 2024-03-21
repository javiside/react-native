import { Dimensions, StyleSheet, View,  } from "react-native";
import Colors from "../../constants/colors";
import Sizes from "../../constants/sizes";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    marginHorizontal: 24,
    marginTop: deviceWidth < Sizes.small ? 18 : 36,
    padding: 16,
    shadowColor: Colors.black,
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
});

export default Card;
