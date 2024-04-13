import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Task6Buttons = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Buttons</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textStyle1}>{'Login'}</Text>
      </TouchableOpacity>
      {/* <Button title=" Login " color={'#c0c0c0'} /> */}
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.textStyle1}>{'Add to Cart -> '}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button3}>
        <Text style={styles.textStyle1}>{'Request an agent'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button4}>
        <Text style={styles.textStyle1}>{'SIGN UP'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button5}>
        <Text style={styles.textStyle1}> </Text>
      </TouchableOpacity>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button6}>
          <Text style={styles.textStyle1}>{'HOME'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button7}>
          <Text style={styles.textStyle1}>{'PROFILE'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button8}>
          <Text style={styles.textStyle1}>{'Basic Button'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button9}>
          <Text style={styles.textStyle2}>{'Outline Button'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button10}>
          <Text style={styles.textStyle1}> </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button11}>
          <Text style={styles.textStyle2}>{'Clear Button'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button11}>
          <Text style={styles.textStyle}>{'Light'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button12}>
          <Text style={styles.textStyle1}>{'Dark'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button13}>
          <Text style={styles.textStyle1}>{'Default'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button14}>
          <Text style={styles.textStyle1}>{'Secondary'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button15}>
          <Text style={styles.textStyle1}>{'Danger'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Task6Buttons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#00ced1',
    padding: 10,
    marginHorizontal: 70,
  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#1e90ff',
    padding: 10,
    marginHorizontal: 90,
    marginTop: 10,
    borderRadius: 30,
  },
  button3: {
    alignItems: 'center',
    backgroundColor: '#b22222',
    padding: 10,
    marginHorizontal: 70,
    marginTop: 10,
  },
  button4: {
    alignItems: 'center',
    backgroundColor: '#7b68ee',
    padding: 10,
    marginHorizontal: 70,
    marginTop: 10,
  },
  button5: {
    alignItems: 'center',
    backgroundColor: '#7b68ee',
    padding: 10,
    marginHorizontal: 70,
    marginTop: 10,
  },
  button6: {
    alignItems: 'center',
    backgroundColor: '#7b68ee',
    padding: 10,
    marginHorizontal: 50,
    marginTop: 10,
    borderRadius: 30,
  },
  button7: {
    alignItems: 'center',
    backgroundColor: '#b22222',
    padding: 10,
    marginHorizontal: 50,
    marginTop: 10,
    borderRadius: 30,
  },
  button8: {
    alignItems: 'center',
    backgroundColor: '#1e90ff',
    padding: 10,
    marginHorizontal: 50,
    marginTop: 10,
  },
  button9: {
    alignItems: 'center',
    borderColor: 'blue',
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 50,
    marginTop: 10,
  },
  button10: {
    //alignItems: 'center',
    backgroundColor: 'lightgreen',
    padding: 10,
    marginHorizontal: 20,
    marginTop: 10,
    width: 150,
    borderRadius: 30,
  },
  button11: {
    padding: 10,
    marginHorizontal: 70,
    marginTop: 10,
  },
  button12: {
    padding: 10,
    backgroundColor: 'black',
    marginHorizontal: 70,
    marginTop: 10,
  },
  button13: {
    padding: 10,
    backgroundColor: 'blue',
    marginHorizontal: 70,
    marginTop: 10,
  },
  button14: {
    padding: 10,
    backgroundColor: 'lightgreen',
    marginHorizontal: 70,
    marginTop: 10,
  },
  button15: {
    padding: 10,
    backgroundColor: '#ff4500',
    marginHorizontal: 70,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'black',
  },
  textStyle1: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
  },
  textStyle2: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'blue',
  },
});
