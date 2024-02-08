
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Grid from '../components/grid';



const Home = () => {

  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter number of columns"
        value=""
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter number of rows"
        value=""
        keyboardType="numeric"
      />
      <TouchableOpacity>submit</TouchableOpacity>
      </View>
      <View style={styles.gridContainer}>
        <Grid/>
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

 
});

export default Home;


