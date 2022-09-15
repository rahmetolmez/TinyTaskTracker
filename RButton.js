import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Pressable,
} from "react-native";

const RButton = (props) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: props.width,
          height: props.height,
          backgroundColor: props.backgroundColor,
        },
      ]}
    >
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: props.backgroundColor,
            backgroundColor: props.foregroundColor
              ? props.foregroundColor
              : props.backgroundColor,
          },
        ]}
        activeOpacity={0.09}
        onPress={() => props.onPress()}
        //onPress={[addItems, clearTextInput]}
      >
        <Text
          style={[
            styles.textContent,
            {
              color: props.textColor,
              fontSize: props.fontSize ? props.fontSize : 29,
            },
          ]}
        >
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    width: 160,
    height: 100,
    backgroundColor: "rgba(122,122,122,1)",
    alignItems: "flex-start",
    alignSelf: "center",
    marginHorizontal: 6,
    marginTop: 6,
    marginBottom: 10,
    minHeight: 29,
    justifyContent: "center",
    elevation: 12,
    borderRadius: 10,
  },
  textContent: {
    fontSize: 29,
    color: "white",
    alignContent: "center",
    fontWeight: "500",
    //alignSelf: "stretch",
  },
  button: {
    //margin: 6,
    //marginTop: 6,
    //marginBottom: 6,
    margin: 12,
    fontSize: 32,
    backgroundColor: "rgba(122,122,122,1)",
    alignSelf: "stretch",
    alignItems: "center",
    elevation: 13,
    borderRadius: 10,
    padding: 12,
  },
});

export default RButton;
