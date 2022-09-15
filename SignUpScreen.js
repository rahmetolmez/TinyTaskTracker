import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
//import { auth } from "./Firebase";
import { auth } from "./FirebaseConfig";
//import firebase from "firebase/compat/app";
//import "firebase/compat/firestore";

import RButton from "./RButton";

import firebase from "firebase/compat/app";
function SignUpScreen(props) {
  const [inputEmailAddress, setEmailAddress] = React.useState("");
  const [inputPassword, setPassword] = React.useState("");
  const onSignUpPress = (value) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(inputEmailAddress, inputPassword)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((error) => console.error(error));

    setEmailAddress("");
    setPassword("");
  };
  return (
    <SafeAreaView style={styles.container}>
      {/*<Text style={styles.titleText}>TINY TASK TRACKER</Text>*/}
      {/* <RButton
        width={400}
        height={100}
        textColor={"white"}
        backgroundColor={"#c0ca33"}
        text={"TINY TASK TRACKER"}
        onPress={() => null}
      /> */}
      <View style={styles.signUpView}>
        <TextInput
          value={inputEmailAddress}
          style={styles.inputEmail}
          placeholder="E-Mail address..."
          keyboardType="email-address"
          onChangeText={(value) => setEmailAddress(value)}
          //keyboardType="numeric"
        />
        <TextInput
          value={inputPassword}
          style={styles.inputEmail}
          secureTextEntry={true}
          placeholder="New password..."
          onChangeText={(value) => setPassword(value)}
          //keyboardType="numeric"
        />
        <RButton
          width={200}
          height={100}
          textColor={"white"}
          backgroundColor={"#00bcd4"}
          text={"SIGN UP"}
          onPress={() => onSignUpPress()}
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
    alignSelf: "stretch",
    justifyContent: "center",
  },
  inputEmail: {
    backgroundColor: "white",
    alignItems: "flex-start",
    alignSelf: "stretch",
    height: 60,
    marginHorizontal: 6,
    marginTop: 6,
    marginBottom: 10,
    minHeight: 39,
    justifyContent: "center",
    //elevation: 12,
    borderRadius: 10,
  },
  signUpView: {
    backgroundColor: "gainsboro",
    alignItems: "center",
    width: 250,
    alignSelf: "center",
    //marginTop: 22,
    marginBottom: 100,
    marginHorizontal: 12,
    justifyContent: "center",
    elevation: 12,
    borderRadius: 10,
  },
});

export default SignUpScreen;
