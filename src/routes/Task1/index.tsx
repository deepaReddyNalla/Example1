import React from 'react';
import {View, StyleSheet} from 'react-native';

const Task1 = () => {
  return (
    <View style={styles.container}>
      {/* Row 1 */}
      <View style={styles.row}>
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
      {/* Row 2 */}
      <View style={styles.row}>
        <View style={styles.box1} />
        <View style={styles.box1} />
      </View>
      {/* Row 3 */}
      <View style={styles.row}>
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'blue',
    marginBottom: 10,
  },
  box1: {
    width: 150,
    height: 150,
    backgroundColor: 'orange',
    marginBottom: 10,
  },
});

export default Task1;
