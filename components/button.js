import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = (props) => {

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2A1E5A",
    padding: 9,
    alignItems: "center",
    borderRadius: 16,
    borderColor: "#EDD4F4",
    borderWidth: 3,
  },
  text: {
    fontSize: 16,
    color: "#ffffff",
    fontFamily: "Poppins-Semibold",
    letterSpacing: 1,
    marginBottom: -2,
  },
});

export default Button;
