import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  FlatList,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    name: 'Amber Griffin',
    state: 'online',
  },
  {
    name: 'Andreea  Wells',
    state: 'online',
  },
  {
    name: 'Kathryn Hill',
    state: 'Lastseen 3 minutes ago',
  },
  {
    name: 'Kelly McCoy',
    state: 'Lastseen 5 minutes ago',
  },
  {
    name: 'Tyler Banks',
    state: 'Lastseen 7 minutes ago',
  },
  {
    name: 'Carmen Mendez',
    state: 'Lastseen 10 minutes ago',
  },
];

const Task4 = () => {
  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return (
      <View style={styles.flatlistview}>
        <View style={styles.row}>
          <View style={styles.circleStyle} />
          <Text style={styles.textStyle}>{item.name}</Text>
        </View>
        <Text style={styles.circleStyle1}>{item.state}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} placeholder="Search People" />

      <FlatList data={DATA} renderItem={renderItem} />
      <ScrollView>
        <Text>
          You can set options such as the screen title for each screen in the
          options prop of Stack.Screen. Each screen takes a component prop that
          is a React component. Those components receive a prop called
          navigation which has various methods to link to other screens. For
          example, you can use navigation.navigate to go to the Profile screen:
        </Text>
      </ScrollView>

      <Button
        title="Go to Task5"
        onPress={() => navigation.navigate('Task5')}
      />
    </SafeAreaView>
  );
};

export default Task4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
  },

  flatlistview: {
    alignSelf: 'flex-start',
    padding: 20,
  },
  textStyle: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
  },
  circleStyle: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'blue',
    justifyContent: 'space-between',
  },
  circleStyle1: {
    alignSelf: 'center',
    margin: 3,
    flexWrap: 'wrap',
  },
});
