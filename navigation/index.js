import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Browse from '../screens/Browse';
import Explore from '../screens/Explore';
import Login from '../screens/Login';
import SignUp from '../screens/Signup';
import Product from '../screens/Product';
import Settings from '../screens/Settings';
import Welcome from '../screens/Welcome';
import Forgot from '../screens/Forgot';

import {theme} from '../constants';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Browse" component={Browse} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
