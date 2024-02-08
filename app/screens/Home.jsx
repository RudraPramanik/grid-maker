
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Grid from '../components/Grid';


const Home = () => {
  const [columns, setColumns] = useState('');
  const [rows, setRows] = useState('');
  const [color, setColor] = useState('');


  const handleSubmit = () => {
    //string to integer
    const numColumns = parseInt(columnsValue);
    const numRows = parseInt(rowsValue);
    
        setColumns(numColumns);
      setRows(numRows);
   
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


