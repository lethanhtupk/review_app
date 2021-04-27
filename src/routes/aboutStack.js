import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import About from '../screens/about';
import Header from '../layouts/header';

const Stack = createStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => {
        return {
          headerTitle: () => (
            <Header navigation={navigation} title="About GameZone" />
          ),
          // headerTintColor: '#444',
          // headerStyle: {backgroundColor: '#f4511e'},
          // headerTitleStyle: 'bold',
        };
      }}>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default AboutStack;
