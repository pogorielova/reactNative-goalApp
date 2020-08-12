import React from "react";
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity  activeOpacity={0.75} onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 5,
    marginBottom: 5,
    backgroundColor: "lightgrey",
  },
});

export default GoalItem;
