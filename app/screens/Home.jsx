
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Grid from '../components/grid';

const Home = () => {
  const [columnsValue, setColumnsValue] = useState('');
  const [rowsValue, setRowsValue] = useState('');
  const [columns, setColumns] = useState('');
  const [rows, setRows] = useState('');
  const [color, setColor] = useState('');


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
      alert('Please enter valid numbers for columns and rows.');
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
        // value={columns}
        // onChangeText={setColumns}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter number of rows"
        value={rowsValue}
        onChangeText={handleRowsChange}
        // value={rows}
        // onChangeText={setRows}
        keyboardType="numeric"
      />
      <View style={styles.colorSelector}>
        <Button title="white" onPress={() => setColor('white')} />
        <Button title="green" onPress={() => setColor('#a2e8b5')} />
        <Button title="pink" onPress={() => setColor('#e6cced')} />
        <Button title="pink" onPress={() => setColor('#e6cced')} />

      </View>
      <Button title="Submit" onPress={handleSubmit} />
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 2,
    width: '100%',
  },
  gridContainer: {
    flex: 3,
    width:'100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius:10,
    width: '100%',
  },
  colorSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
 
  row: {
    flexDirection: 'row',
  },
});

export default Home;


