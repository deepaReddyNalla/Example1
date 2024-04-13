import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

const CountScreen = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 2);
    }, 1000);
  }, []);

  const handelonpressCount = useCallback(() => {
    setCount(num => num + 1);
    console.log('callback num', count);
  }, [count]);

  const handelonCount = () => {
    setCount(count + 1);
  };

  const handleAlert = () => {
    Alert.alert('pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>CountScreen</Text>
      <Text style={styles.textStyle}>Count: {count}</Text>
      {/* <TouchableOpacity style={styles.buttonStyle} onPress={handelonpressCount}>
        <Text style={styles.textIncrement}>Increment</Text>
      </TouchableOpacity> */}
      <Button title="increment" onPress={handelonpressCount} />
      <Button title="Alert" onPress={handleAlert} />
      <TouchableOpacity onPress={handelonCount}>
        <Text>Practice another function</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    alignSelf: 'center',
    fontWeight: '600',
    color: 'red',
    fontSize: 18,
  },
  textIncrement: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'blue',
  },
  buttonStyle: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    marginHorizontal: 10,
  },
});
