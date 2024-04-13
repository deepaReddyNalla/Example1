import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface Props {
  name: string;
  rollNo: number;
}

const Screen1 = ({name, rollNo}: Props) => {
  return (
    <View>
      <Text style={styles.textStyle}>{'Sample Component'}</Text>
      <Image
        source={require('./../../assets/nature.jpg')}
        style={styles.imageStyle}
      />
      <Text>UserName : {name}</Text>
      <Text>Roll Number : {rollNo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    color: 'blue',
    alignSelf: 'center',
  },
  imageStyle: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});
export default Screen1;
