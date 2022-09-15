import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainMenu from "./HomeScreen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import GeneralSettingsScreen from "./GeneralSettingsScreen";
import BoardsScreen from "./BoardsScreen";
import Board from "./Board";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import SignInSignUpScreen from "./SignInSignUpScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  /*TouchableOpacity.defaultProps = {
    ...(TouchableOpacity.defaultProps || {}),
    delayPressIn: 0,
  };*/
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignInSignUpScreen"
          component={SignInSignUpScreen}
          options={{
            title: "",
            //headerTitleAlign: "center",
            headerStyle: styles.homeHeader,
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "normal",
              //fontSize: 28,
            },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{
            title: "Sign In",
            //headerTitleAlign: "center",
            headerStyle: styles.header,
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "normal",
              //fontSize: 28,
            },
          }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            title: "Sign Up",
            //headerTitleAlign: "center",
            headerStyle: styles.header,
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "normal",
              //fontSize: 28,
            },
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "",
            //headerTitleAlign: "center",
            headerStyle: styles.homeHeader,
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "normal",
              //fontSize: 28,
            },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="GeneralSettingsScreen"
          component={GeneralSettingsScreen}
          options={{
            title: "Settings",
            // headerTitleAlign: "center",
            headerStyle: styles.header,
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="BoardsScreen"
          component={BoardsScreen}
          options={{
            title: "Boards",
            //headerTitleAlign: "center",
            headerStyle: styles.header,
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="Board"
          component={Board}
          options={{
            title: "Board",
            //headerTitleAlign: "center",
            headerStyle: styles.header,
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#c0ca33",
  },
  homeHeader: {
    backgroundColor: "#F5F5F5",
    elevation: 0,
  },
});
