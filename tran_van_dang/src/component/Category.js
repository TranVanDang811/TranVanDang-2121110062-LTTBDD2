import React from "react";
import { TextInput, StyleSheet, View, SafeAreaView } from "react-native";

export default function Category() {
  return (
    <SafeAreaView>
    <View style={styles.header}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        keyboardType="text"
        className="border-"
      />
    </View>
    </SafeAreaView>
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