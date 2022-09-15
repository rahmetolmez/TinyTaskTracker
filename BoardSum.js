import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RButton from "./RButton";

const BoardSum = (props) => {
  return (
    <RButton
      width={323}
      height={150}
      textColor={"white"}
      backgroundColor={props.backgroundColor}
      text={props.title}
      onPress={() =>
        props.navigation.navigate("Board", {
          boardTitle: props.title,
          backgroundColor: props.backgroundColor,
        })
      }
    />
  );
  /*return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() =>
        props.navigation.navigate("Board", {
          boardTitle: props.title,
          backgroundColor: props.backgroundColor,
        })
      }
    >
      <View
        style={[styles.container, { backgroundColor: props.backgroundColor }]}
      >
        <Text style={styles.textTitle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );*/
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#00bcd4",
    alignItems: "center",
    padding: 29,
    alignSelf: "stretch",
    borderRadius: 10,
    width: 323,
    height: 150,
    marginBottom: 43,
    elevation: 10,
    //justifyContent: "space-evenly",
  },
  textTitle: {
    fontSize: 20,
    color: "white",
    padding: 1,
    fontWeight: "normal",
    fontFamily: "Roboto",
  },
});

export default BoardSum;
