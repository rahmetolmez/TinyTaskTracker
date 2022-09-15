import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import RButton from "./RButton";

function SignInSignUpScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      {/*<Text style={styles.titleText}>TINY TASK TRACKER</Text>*/}
      <RButton
        width={400}
        height={100}
        textColor={"white"}
        backgroundColor={"#c0ca33"}
        text={"TINY TASK TRACKER"}
        onPress={() => null}
      />
      <View style={styles.containerButtons}>
        <RButton
          width={200}
          height={100}
          textColor={"white"}
          backgroundColor={"#00bcd4"}
          text={"SIGN IN"}
          onPress={() => props.navigation.navigate("SignInScreen")}
        />
        <RButton
          width={200}
          height={100}
          textColor={"white"}
          backgroundColor={"#008ba3"}
          text={"SIGN UP"}
          onPress={() => props.navigation.navigate("SignUpScreen")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#F5F5F5",
    backgroundColor: "#008299",
    alignItems: "center",
    //alignSelf: "stretch",
    justifyContent: "flex-start",
  },
  containerButtons: {
    //backgroundColor: "#F5F5F5",
    backgroundColor: "#008299",
    //flex: 0.3,
    flexDirection: "column",
    //alignSelf: "",
    padding: 16,
    top: 150,
    //height: 400,
    //width: 180,
    justifyContent: "space-evenly",
    //elevation: 10,
  },
});

export default SignInSignUpScreen;
