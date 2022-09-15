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
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";
import List from "./List";
import RButton from "./RButton";

const Board = (props) => {
  const [views, setViews] = React.useState([]);
  const [listTitle, setListTitle] = React.useState("");
  const addItems = () => {
    const arr = [...views];
    arr.push(<List listTitle={listTitle} /*key={listTitle.id}*/ />);

    setViews(arr);
  };
  useEffect(() => {
    props.navigation.setOptions({
      headerStyle: { backgroundColor: props.route.params.backgroundColor },
    });
  });
  const onAddButtonPress = (value) => {
    //setCardText(value);
    addItems();
    setListTitle("");
  };
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: props.route.params.backgroundColor },
      ]}
    >
      <View style={styles.titleBar}>
        <Text style={styles.textTitle}>{props.route.params.boardTitle}</Text>
      </View>
      {/*<View style={styles.separator} />*/}
      {/*<View style={styles.listContainer}>*/}
      <View style={{ flex: 1, flexDirection: "row" }}>
        <ScrollView
          //stickyHeaderIndices={[0]}
          style={[
            styles.scrollview,
            { backgroundColor: props.route.params.backgroundColor },
            //{ flexDirection: "row" },
          ]}
          horizontal
          showsHorizontalScrollIndicator={false}
          //contentContainerStyle={{ flexDirection: "row" }}
        >
          {views.map((item, index) => {
            return <View key={index}>{item}</View>;
          })}
          <View style={styles.listAddBackground}>
            <TextInput
              //value={inputText}
              value={listTitle}
              style={styles.listInput}
              placeholder="List Title..."
              onChangeText={(value) => setListTitle(value)}
              //keyboardType="numeric"
            />
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => onAddButtonPress()}
              //onPress={[addItems, clearTextInput]}
            >
              <Text style={{ fontSize: 29, color: "grey" }}>+</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      {/*</View>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titleBar: {
    backgroundColor: "rgba(0,0,0,0.3)",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "flex-start",
  },
  textTitle: {
    fontSize: 22,
    marginTop: 18,
    marginBottom: 18,
    //fontStyle: "italic",
    fontWeight: "600",
    color: "white",
    //marginBottom: 28,
  },
  addButton: {
    backgroundColor: "#e6e6e6",
    alignItems: "center",
    //width: 100,
    //height: 100,
    height: 100,
    width: 100,
    alignSelf: "center",
    marginTop: 12,
    marginBottom: 22,
    marginHorizontal: 12,
    justifyContent: "center",
    elevation: 12,
    borderRadius: 10,
  },
  scrollview: {
    flex: 1,
    backgroundColor: "white",
    alignSelf: "stretch",
    //flexDirection: "row",
    //flexGrow: 1,
    //margin: 8,
    //elevation: 12,
  },
  listInput: {
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
  listAddBackground: {
    backgroundColor: "gainsboro",
    alignItems: "center",
    width: 150,
    alignSelf: "flex-start",
    marginTop: 22,
    marginBottom: 100,
    marginHorizontal: 12,
    justifyContent: "flex-start",
    elevation: 12,
    borderRadius: 10,
  },
  separator: {
    borderBottomColor: "white",
    borderBottomWidth: 5,
    paddingLeft: 23,
    alignSelf: "stretch",
  },
});

export default Board;
