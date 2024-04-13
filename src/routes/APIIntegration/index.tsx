import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
const APIIntegration = () => {
  const [employees, setEmployees] = useState([]);

  const fetchAPI = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
      );
      setEmployees(response.data);
      console.log('employees', response.data);
    } catch (error) {
      console.error('error fetching', error);
    }
  };
  useEffect(() => {
    fetchAPI();
  }, []);

  const renderEmployees = ({item}) => (
    <View>
      <Text style={styles.textStyle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>API Integration</Text>
      <FlatList
        data={employees}
        renderItem={renderEmployees}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default APIIntegration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    fontSize: 18,
    marginHorizontal: 15,
  },
});
