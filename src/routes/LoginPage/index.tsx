import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Text style={style.textStyle}>Login</Text>
      <Text>Name</Text>
      <TextInput style={style.input} />
      <Text>Email</Text>
      <TextInput style={style.input} />
      <Text>Password</Text>
      <TextInput style={style.input} />
      <Button
        title="Save"
        onPress={() => {
          navigation.navigate('Home', {name: 'Login Page', id: 70});
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'blue',
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
});
export default Login;
