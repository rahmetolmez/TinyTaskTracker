import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";

const Card = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContent}>{props.cardText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "white",
    alignItems: "flex-start",
    alignSelf: "stretch",
    marginHorizontal: 6,
    marginTop: 6,
    marginBottom: 10,
    minHeight: 29,
    justifyContent: "center",
    elevation: 12,
  },
  textContent: {
    margin: 3,
  },
});

export default Card;
