import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import AppNavigator from './src/Navigations';

const App = () => {
  const [count1, setCount1] = useState(0);

  const count = useRef(0);

  const handler = useCallback(() => {
    // setCount(count + 1);
    setCount1(count1 + 1);
    //count.current = updatedCount;
    console.log(`clicked ${count1} time`);
  }, [count1]);

  // useEffect(() => {
  //   console.log('The component have been rendered');
  // }, []);

  return (
    // <View>
    //   <Button title="count" onPress={handler} />
    //   <Text>count: {count1}</Text>
    // </View>

    <AppNavigator />
  );
};

export default App;

const styles = StyleSheet.create({});
