import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = ({onChangeText, value}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder=""
        value={value ? value : ""}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    width: "100%",
    height: 43,
    borderRadius: 16,
    borderWidth: 2,
    paddingLeft: 15,
    borderColor: "#2A1E5A",
    fontFamily: "Poppins-Medium"
  },
});

export default Input;
