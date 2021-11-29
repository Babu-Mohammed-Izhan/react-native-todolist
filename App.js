import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import List from "./components/list";

export default function App() {
  const [listdata, setListdata] = useState([]);
  const [text, setText] = useState("");

  const inputRef = useRef(null);

  const handleText = () => {
    setListdata([...listdata, text]);
    inputRef.current.clear();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>TodoList</Text>
      <TextInput
        style={styles.input}
        placeholder="Add Todo"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
        ref={inputRef}
      />
      <Button onPress={() => handleText()} title="Add Todo" />
      {listdata.map((ld) => {
        return <List key={ld} data={ld} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    margin: "auto",
    flex: 1,
    backgroundColor: "#fff",
    padding: "3rem 0rem",
  },
  text: {
    fontSize: "2rem",
    textAlign: "center",
  },
  input: {
    padding: "1rem",
    fontSize: "1.5rem",
    marginVertical: "1rem",
  },
  button: {
    marginTop: "1rem",
  },
});
