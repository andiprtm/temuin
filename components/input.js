import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder=""
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    paddingLeft: 15,
  },
});

export default Input;
