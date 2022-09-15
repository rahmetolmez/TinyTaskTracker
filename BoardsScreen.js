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
  FlatList,
  TextInput,
} from "react-native";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "firebase/compat/app";
////****import { getFireStore, collection, getDocs } from "firebase/compat/firestore";
//import "firebase/compat/firestore";
import { db } from "./FirebaseConfig";

import { collection, getDocs, addDoc } from "@firebase/firestore";

import Board from "./Board";
import BoardSum from "./BoardSum";
import RButton from "./RButton";

function BoardsScreen(props) {
  const [views, setViews] = React.useState([]);
  const [boardTitle, setBoardTitle] = React.useState("");
  const [boardColor, setBoardColor] = React.useState("");
  const boardCollectionRef = collection(db, "Board");

  const [boards, setBoards] = React.useState([]);
  //const usersCollectionRef = collection(db, "users");

  const insertBoards = async (inTitle, inBgColor) => {
    await addDoc(boardCollectionRef, {
      title: boardTitle,
      bgColor: boardColor,
    });
    ///const arr = [...boards];
    ///console.log("intitle:", boardTitle);
    ///arr.push(
    ///  <BoardSum
    ///    navigation={props.navigation}
    ///    title={boardTitle ? boardTitle : "Nopp Title"}
    ///    backgroundColor={boardColor ? boardColor : "orange"}
    ///  />
    ///);
    ///setBoards(arr);
  };
  useEffect(() => {
    const readBoards = async () => {
      ///const data = await getDocs(boardCollectionRef);
      ///console.log("THE DATA", data);

      const data = await getDocs(boardCollectionRef);
      setBoards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      //setViews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      //   views.push(
      //     <BoardSum
      //       navigation={props.navigation}
      //       title={boardTitle ? boardTitle : "Nod Title"}
      //       backgroundColor={boardColor ? boardColor : "red"}
      //     />
      //   );
    };
    readBoards();
  }, []);
  //   const addItems = () => {
  //     const arr = [...views];
  //     arr.push(
  //       <BoardSum
  //         navigation={props.navigation}
  //         title={boardTitle ? boardTitle : "No Title"}
  //         backgroundColor={boardColor ? boardColor : "orange"}
  //       />
  //     );

  //     setViews(arr);
  //     //setBoards();
  //   };

  const onAddButtonPress = (value) => {
    //setCardText(value);
    ////addItems();
    insertBoards(boardTitle, boardColor);
    setBoards(boards);
    setBoardTitle("");
    setBoardColor("");

    const readBoards = async () => {
      const data = await getDocs(boardCollectionRef);
      setBoards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    readBoards();
  };
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@storage_Key", jsonValue);
    } catch (e) {
      // saving error
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.boardsScroll}
      >
        {/*<TouchableOpacity activeOpacity={0.3}>
          <View style={[styles.newBoardButton]}>
            <Text style={styles.textNewBoardButton}>+ Add new board</Text>
          </View>
  </TouchableOpacity>*/}

        {/* {views.map((item, index) => {
          return <View key={index}>{item}</View>;
        })} */}

        {boards.map((board) => {
          //console.log("userlen:", board);
          //console.log("user title:", board.title);
          //console.log("user bgcolor:", board.bgColor);
          console.log("??:", board.title);
          console.log("col", board.bgColor);
          console.log("??2:", boardTitle);
          console.log("col2", boardColor);
          return (
            <View>
              <BoardSum
                navigation={props.navigation}
                title={board.title ? board.title : "No Title"}
                backgroundColor={board.bgColor ? board.bgColor : "orange"}
              />
            </View>
          );
        })}
        <View style={styles.boardAddButtonAndInput}>
          <TextInput
            //value={inputText}
            value={boardTitle}
            style={styles.boardTitleInput}
            placeholder="Board Title..."
            onChangeText={(value) => setBoardTitle(value)}
            //keyboardType="numeric"
          />
          <TextInput
            //value={inputText}
            value={boardColor}
            style={styles.boardTitleInput}
            placeholder="Board Color (e.g. 'red' or '#abc')"
            onChangeText={(value) => setBoardColor(value)}
            //keyboardType="numeric"
          />
          <RButton
            width={200}
            //height={154}
            backgroundColor={"gainsboro"}
            foregroundColor={"#e6e6e6"}
            textColor={"grey"}
            text={"+"}
            onPress={() => onAddButtonPress()}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#F5F5F5",
    backgroundColor: "#008299",
    alignItems: "center",
    padding: 29,
    justifyContent: "space-evenly",
    //marginBottom: 3,
  },
  boardTitleInput: {
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
  boardAddButtonAndInput: {
    backgroundColor: "gainsboro",
    alignItems: "center",
    width: 250,
    alignSelf: "center",
    marginTop: 22,
    marginBottom: 100,
    marginHorizontal: 12,
    justifyContent: "flex-start",
    elevation: 12,
    borderRadius: 10,
  },
  boardsScroll: {
    flexGrow: 1,
    padding: 12,
    paddingBottom: 12,
    justifyContent: "space-evenly",
  },
  newBoardButton: {
    //flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    padding: 9,
    alignSelf: "stretch",
    borderRadius: 10,
    width: 323,
    height: 50,
    marginBottom: 43,
    //justifyContent: "space-evenly",
  },
  textNewBoardButton: {
    fontSize: 20,
    color: "white",
    padding: 1,
    fontWeight: "normal",
    fontFamily: "Roboto",
  },
});

export default BoardsScreen;
