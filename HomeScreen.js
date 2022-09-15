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
import RButton from "./RButton";
import { SafeAreaView } from "react-native-safe-area-context";
import List from "./List";
import Card from "./Card";
import firebase from "firebase/compat/app";
import { auth } from "./FirebaseConfig";

function HomeScreen(props) {
  const onSignOutPress = () => {
    auth
      .signOut()
      .then(() => {
        props.navigation.replace("SignInSignUpScreen");
      })
      .catch((error) => console.log(error.message));
  };
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
        {/*<Button
          color="#00bcd4"
          title="Boards"
          onPress={() => props.navigation.navigate("BoardsScreen")}
        />
        <Button
          color="#00bcd4"
          title="Settings"
          onPress={() => props.navigation.navigate("GeneralSettingsScreen")}
        />
        <Button
          color="#008ba3"
          title="Exit"
          onPress={() =>
            Alert.alert("Quit App", "Are you sure you want to exit?", [
              { text: "Yes" },
              { text: "No" },
            ])
          }
        />*/}
        <RButton
          width={200}
          height={100}
          textColor={"white"}
          backgroundColor={"#00bcd4"}
          text={"BOARDS"}
          onPress={() => props.navigation.navigate("BoardsScreen")}
        />
        <RButton
          width={200}
          height={100}
          textColor={"white"}
          backgroundColor={"#00bcd4"}
          text={"SETTINGS"}
          onPress={() => props.navigation.navigate("GeneralSettingsScreen")}
        />
        <RButton
          width={200}
          height={100}
          textColor={"white"}
          backgroundColor={"#008ba3"}
          text={"EXIT"}
          onPress={() =>
            Alert.alert("Quit App", "Are you sure you want to exit?", [
              { text: "Yes" },
              { text: "No" },
            ])
          }
        />
        <View style={{ marginTop: 33, alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "200",
              fontSize: 23,
              color: "white",
              opacity: 0.8,
            }}
          >
            You are logged in with e-mail:
          </Text>
          <Text
            style={{
              fontWeight: "200",
              fontSize: 23,
              fontStyle: "italic",
              color: "#c0ca33",
              //opacity: 1,
            }}
          >
            {auth.currentUser?.email}
          </Text>
        </View>
        <RButton
          width={200}
          height={70}
          textColor={"white"}
          backgroundColor={"#008ba3"}
          text={"Sign Out"}
          fontSize={15}
          onPress={onSignOutPress}
        />
      </View>

      {/*<View style={styles.bottomView}></View>*/}
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
  titleText: {
    padding: 20,
    //backgroundColor: "#94d2bd",
    fontSize: 30,
    fontWeight: "normal",
    fontFamily: "Roboto",
    //alignSelf: "stretch",
    textAlign: "center",
    color: "#c0ca33",
    /*textShadowColor: "#8c9900",
    textShadowRadius: 3,
    textShadowOffset: {
      width: 2,
      height: 2,
    },*/
  },
  bottomView: {
    flex: 0.3,
    color: "yellow",
    backgroundColor: "red",
    alignContent: "flex-end",
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
});

//export default MainMenu;
export default HomeScreen;
