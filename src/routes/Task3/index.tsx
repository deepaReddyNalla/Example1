import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Task3 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{'GRAPEFRUIT WITH ROSEMARY'}</Text>
      <Image
        style={styles.imageStyle}
        source={require('./../../assets/fruit.jpg')}
      />
      <View style={styles.bottom}>
        <Text style={styles.text}>{'@ Pack'}</Text>
        <Text style={styles.backcolor}>{'BUY ON FOXTROT'}</Text>
        <Text style={styles.textstyles}>{'VIEW'}</Text>
      </View>
    </View>
  );
};

export default Task3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffc0cb',
    marginTop: 18,
    marginBottom: 18,
    marginLeft: 18,
    marginEnd: 18,
  },
  textStyle: {
    fontSize: 40,
    textAlign: 'left',
    color: 'black',
  },
  textstyles: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 30,
    textDecorationLine: 'underline',
  },
  text: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 30,
  },
  backcolor: {
    backgroundColor: '#adff2f',
    textAlign: 'center',
    marginTop: 20,
    height: 30,
    padding: 5,
  },
  imageStyle: {
    height: 300,
    width: 300,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
  },
  bottom: {
    flex: 1,
    backgroundColor: '#f08080',
    marginTop: 150,
  },
});
