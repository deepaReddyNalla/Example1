import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
import SampleComponent from '../../components/SampleComponent';

const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const title = route.params?.subTitle;

  return (
    <View>
      <Text>I got Details</Text>

      <Button
        title="Go to Login Page"
        onPress={() => navigation.navigate('CountScreen')}
      />
      <Text>{title}</Text>
      <SampleComponent name="Kruthi" rollNo={17} />
    </View>
  );
};
export default Details;
