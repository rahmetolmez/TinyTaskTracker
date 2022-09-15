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
import { useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import firebase from "firebase/compat/app";
import RButton from "./RButton";
import { auth } from "./FirebaseConfig";

function SignInScreen(props) {
  const [inputEmailAddress, setEmailAddress] = React.useState("");
  const [inputPassword, setPassword] = React.useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        props.navigation.replace("HomeScreen");
      }
    });
    return unsubscribe;
  }, []);

  const onSignInPress = (value) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(inputEmailAddress, inputPassword)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("logged in with", user.email);
      })
      .catch((error) => console.error(error));
    setEmailAddress("");
    setPassword("");
    //props.navigation.navigate("HomeScreen");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.signInView}>
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
          placeholder="Password..."
          onChangeText={(value) => setPassword(value)}
          //keyboardType="numeric"
        />
        <RButton
          width={200}
          height={100}
          textColor={"white"}
          backgroundColor={"#00bcd4"}
          text={"SIGN IN"}
          onPress={() => onSignInPress()}
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
  signInView: {
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

export default SignInScreen;
