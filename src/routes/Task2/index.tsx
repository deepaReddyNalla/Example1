import {Button, StyleSheet, Text, TextInput, View, Image} from 'react-native';
import React, {useState} from 'react';

const Task2 = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isemailpreview, setIsemailpreview] = useState();
  const [ispasswordpreview, setPasswordpreview] = useState();

  const handelonpressCount = () => {
    setEmail(email);
    setPassword(password);
    setIsemailpreview(email);
    setPasswordpreview(password);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={e => setEmail(e)}
      />
      <TextInput
        style={styles.input}
        secureTextEntry
        onChangeText={e => setPassword(e)}
      />
      {/* <CheckBox style={styles.checkbox} /> */}
      <Text>{'Remember me'}</Text>
      <Button title="LOGIN" color="red" onPress={handelonpressCount} />
      <Text>{'Or Login With'}</Text>
      <Text>Email : {email}</Text>
      <Text>Pssword: {password}</Text>
      <Text>preview:{isemailpreview}</Text>
      <Text>preview:{ispasswordpreview}</Text>
      <Text style={styles.text}>{'Or login With'}</Text>
      <View style={styles.rowView}>
        <View style={styles.imageContainer}>
          <Image
            source={require('./../../assets/facebook.jpg')}
            style={styles.imageStyle}
            resizeMode="cover"
          />
          <Text style={styles.textStyles}>Facebook</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={require('./../../assets/Google.jpg')}
            style={styles.imageStyle}
            resizeMode="cover"
          />
          <Text style={styles.textStyles}>Google</Text>
        </View>
      </View>
      <Text>{'Code changes'}</Text>
      <Text>{'CHANGES'}</Text>
    </View>
  );
};

export default Task2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    marginTop: 30,
    marginRight: 20,
    marginLeft: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  text: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  checkbox: {
    alignSelf: 'center',
  },
  buttonStyle: {
    borderColor: '#C71585',
  },
  imageStyle: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginTop: 10,
    //gap: 4,
    //padding: 10,
    // alignItems: 'flex-end',
  },
  imageContainer: {
    //marginTop: 50,
    //marginLeft: 200,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    width: 150,
  },
  textStyles: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    margin: 10,
  },
  Text: {
    marginLeft: 40,
    color: 'red',
  },
  rowView: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
