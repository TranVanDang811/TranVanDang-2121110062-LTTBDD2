import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

export default function Header() {
  return (
    <View className="mt-6"style={styles.header}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        keyboardType="text"
        className="border-"
      />
    </View>
  );
}

const styles = StyleSheet.create({

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});