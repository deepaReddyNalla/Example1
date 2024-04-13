import {View, Text} from 'react-native';
import React, {useContext} from 'react';
const ThemeContext = React.createContext('light');
const ThemeText = () => {
  const theme = useContext(ThemeContext);
  return (
    <View>
      <Text style={{color: theme === 'dark' ? 'white' : 'black'}}>
        {'This is themed text'}
      </Text>
    </View>
  );
};

export default ThemeText;
