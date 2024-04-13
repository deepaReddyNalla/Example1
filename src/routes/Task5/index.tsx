import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Task5 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textstyles}>{'Welcome back,'}</Text>
      <Text style={styles.textstyles}>{'Samantha William'}</Text>

      <Text style={styles.textstyles}>{'Office News '}</Text>

      <View style={styles.box4row}>
        <View style={styles.box4}>
          <Text style={styles.textStyle1}>
            {'Vaccine \n Together \n Orphans '}
          </Text>
        </View>
      </View>

      <Text style={styles.textstyles}>{'Main Menu'}</Text>

      <View style={styles.row}>
        <View style={styles.box}>
          <Text style={styles.textStyle}>{'Management employees & leave'}</Text>
        </View>

        <View style={styles.box1}>
          <Text style={styles.textStyle}>{'Claim & Salaries Employees'}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.box2}>
          <Text style={styles.textStyle}>{'Program \n Training'}</Text>
        </View>

        <View style={styles.box3}>
          <Text style={styles.textStyle}>{'System \n  Requirement'}</Text>
        </View>

      </View>
      <Text>{'Code changes'}</Text>
    </View>
  );
};

export default Task5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 50,
    // justifyContent: 'center',
    // flexDirection: 'column',
    // alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    // width: '100%',
    padding: 10,
  },
  box: {
    width: 190,
    height: 190,
    backgroundColor: 'deepskyblue',
    borderRadius: 30,
  },
  box1: {
    width: 190,
    height: 190,
    backgroundColor: '#ffa500',
    borderRadius: 30,
  },
  box2: {
    width: 190,
    height: 190,
    backgroundColor: '#f08080',
    borderRadius: 30,
  },
  box3: {
    width: 190,
    height: 190,
    backgroundColor: 'green',
    borderRadius: 30,
  },
  box4: {
    width: 290,
    height: 190,
    backgroundColor: '#f08080',
    borderRadius: 30,
    alignItems: 'center',
  },
  box4row: {
    padding: 10,
    alignSelf: 'center',
  },
  textstyles: {
    color: 'black',
    fontWeight: 'bold',
  },
  textStyle: {
    fontSize: 18,
    marginLeft: 20,
    alignItems: 'flex-end',
    color: 'white',
    textAlign: 'left',
    justifyContent: 'flex-end',
  },
  textStyle1: {
    fontSize: 18,
    marginRight: 200,
    color: 'white',
  },
});
