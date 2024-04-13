import {Alert, Button, StyleSheet, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../routes/LoginPage';
import Home from '../routes/Home';
import Details from '../routes/Details';
import CountScreen from '../routes/CountScreen';
import Task3 from '../routes/Task3';
import Task2 from '../routes/Task2';
import Task1 from '../routes/Task1';
import Task4 from '../routes/Task4';
import Task5 from '../routes/Task5';
import Task6Buttons from '../routes/Task6Buttons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import APIIntegration from '../routes/APIIntegration';

const AppNavigator = () => {
  const stack = createNativeStackNavigator();
  const tab = createBottomTabNavigator();
  const MyTabs = () => {
    return (
      <tab.Navigator initialRouteName="Task6Buttons">
        <tab.Screen
          name="Task6Buttons"
          component={Task6Buttons}
          options={{headerShown: false}}
        />
        <tab.Screen
          name="Task1"
          component={Task1}
          options={{headerShown: false}}
        />

        <tab.Screen
          name="Task2"
          component={Task2}
          options={{headerShown: false}}
        />
        <tab.Screen
          name="APIIntegration"
          component={APIIntegration}
          options={{headerShown: false}}
        />
      </tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Task6Buttons">
        <stack.Screen
          name="LoginPage"
          component={Login}
          options={{
            title: 'My Home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Button
                title="info"
                color={'blue'}
                onPress={() => Alert.alert('This is a button!')}
              />
            ),
          }}
        />

        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Details" component={Details} />
        <stack.Screen name="CountScreen" component={CountScreen} />
        <stack.Screen name="Task1" component={Task1} />
        <stack.Screen name="Task2" component={Task2} />
        <stack.Screen name="Task3" component={Task3} />

        <stack.Screen
          name="Task4"
          component={Task4}
          options={{
            headerStyle: {
              backgroundColor: 'skyblue',
            },
            headerBackTitle: 'Management Employees',
            headerBackTitleStyle: {fontSize: 30},
            // headerTintColor: 'white',
          }}
        />

        <stack.Screen
          name="Task5"
          component={Task5}
          options={{
            headerStyle: {
              backgroundColor: 'skyblue',
            },
          }}
        />
        <stack.Screen name="Task6Buttons" component={MyTabs} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
