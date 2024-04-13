import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import SampleComponent from '../../components/SampleComponent';

const Home = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const name = route.params?.name;
  const id = route.params?.id;

  return (
    <View>
      <Text>Home</Text>
      <Text>{name}</Text>
      <Text>{id}</Text>
      <SampleComponent name="Prakruthi" rollNo={21} />
      <Button
        title="Go to Details Page"
        onPress={() => navigation.navigate('Details', {subTitle: 'Anything'})} 
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
