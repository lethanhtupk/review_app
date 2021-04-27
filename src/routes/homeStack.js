import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../layouts/header';
import Home from '../screens/home';
import ReviewDetail from '../screens/reviewDetail';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      // screenOptions={{
      //   headerTintColor: '#444',
      //   headerStyle: {backgroundColor: '#f4511e'},
      //   headerTitleStyle: 'bold',
      // }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({navigation}) => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title="GameZone" />
            ),
          };
        }}
      />
      <Stack.Screen
        name="ReviewDetail"
        component={ReviewDetail}
        options={{title: 'Review Details'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
