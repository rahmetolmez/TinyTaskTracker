import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";
import Card from "./Card";
import RButton from "./RButton";

const List = (props) => {
  const [views, setViews] = React.useState([]);
  const [cardText, setCardText] = React.useState("");
  const addItems = () => {
    const arr = [...views];
    arr.push(<Card cardText={cardText} key={cardText.id} />);

    setViews(arr);
  };

  const onAddButtonPress = (value) => {
    //setCardText(value);
    addItems();
    setCardText("");
  };

  /*const clearTextInput = (textInput) => {
    textInput.clear();
  };*/

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.listTitle}</Text>

      <ScrollView
        style={[styles.scrollView]}
        showsVerticalScrollIndicator={false}
      >
        {views.map((item, index) => {
          return <View key={index}>{item}</View>;
        })}
      </ScrollView>
      <TextInput
        //value={inputText}
        value={cardText}
        style={styles.cardInput}
        placeholder="Type here..."
        onChangeText={(value) => setCardText(value)}
        //onChangeText={setInputVal}
        //keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.addButton}
        //onPress={() => addItems()}
        //onPress={() => setInputVal()}
        onPress={() => onAddButtonPress()}
        //onPress={[addItems, clearTextInput]}
      >
        <Text style={{ fontSize: 29, color: "grey" }}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "gainsboro",
    alignItems: "center",
    width: 150,
    alignSelf: "flex-start",
    marginTop: 22,
    marginBottom: 200,
    marginHorizontal: 12,
    justifyContent: "flex-start",
    elevation: 12,
    borderRadius: 10,
  },
  scrollView: {
    backgroundColor: "gainsboro",
    alignSelf: "stretch",
    alignContent: "flex-start",
    flexGrow: 0,
  },
  addButton: {
    margin: 12,
    fontSize: 32,
    backgroundColor: "#e6e6e6",
    alignSelf: "stretch",
    alignItems: "center",
    elevation: 33,
    borderRadius: 10,
  },
  cardInput: {
    backgroundColor: "white",
    alignItems: "flex-start",
    alignSelf: "stretch",
    marginHorizontal: 6,
    marginTop: 6,
    marginBottom: 10,
    minHeight: 39,
    justifyContent: "center",
    //elevation: 12,
    borderRadius: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: "500",
    color: "#616161",
  },
});

export default List;
