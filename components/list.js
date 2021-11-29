import React from "react";
import { StyleSheet, Text } from "react-native";

const List = ({ data }) => {
  return <Text style={styles.list}>{data}</Text>;
};

const styles = StyleSheet.create({
  list: {
    padding: "1rem",
    fontSize: "2rem",
    textAlign: "center",
  },
});

export default List;
