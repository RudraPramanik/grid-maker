import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Grid from "../components/Grid";

const Home = () => {
  const [columnsValue, setColumnsValue] = useState("");
  const [rowsValue, setRowsValue] = useState("");
  const [columns, setColumns] = useState("");
  const [rows, setRows] = useState("");
  const [color, setColor] = useState("#edf2ef");

  const handleColumnsChange = (text) => {
    setColumnsValue(text);
  };

  const handleRowsChange = (text) => {
    setRowsValue(text);
  };

  const handleSubmit = () => {
    //string to integer
    const numColumns = parseInt(columnsValue);
    const numRows = parseInt(rowsValue);

    // Check if both colums and rows are valid number
    if (Number.isInteger(numColumns) && Number.isInteger(numRows)) {
      setColumns(numColumns);
      setRows(numRows);
    } else {
      alert("Please enter valid numbers for columns and rows.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter number of columns"
          value={columnsValue}
          onChangeText={handleColumnsChange}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter number of rows"
          value={rowsValue}
          onChangeText={handleRowsChange}
          keyboardType="numeric"
        />
        <View style={styles.colorSelector}>
          <TouchableOpacity
            onPress={() => setColor("white")}
            style={styles.button}
          >
            <Text style={styles.submitButtonText}>WHITE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setColor("#a2e8b5")}
            style={styles.button}
          >
            <Text style={styles.submitButtonText}>GREEN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setColor("#e6cced")}
            style={styles.button}
          >
            <Text style={styles.submitButtonText}>PINK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setColor("#8989f5")}
            style={styles.button}
          >
            <Text style={styles.submitButtonText}>PURPLE</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.gridContainer}>
        <Grid columns={columns} rows={rows} color={color} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 2,
    width: "100%",
  },
  gridContainer: {
    flex: 3,
    width: "100%",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: "100%",
  },
  colorSelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#4c0b7d",
    padding: 10,
    color: "white",
    borderRadius: 5,
    alignItems: "center",
    fontWeight: "bold",
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Home;
