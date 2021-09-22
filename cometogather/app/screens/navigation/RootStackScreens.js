import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SplashScreen, SignUpPage, SignInPage} from '../';
const RootStack = createStackNavigator();

const RootStackScreens = ({navigation}) => (
  <RootStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <RootStack.Screen name="Splash" component={SplashScreen} />
    <RootStack.Screen name="SignIn" component={SignInPage} />
    <RootStack.Screen name="SignUp" component={SignUpPage} />
  </RootStack.Navigator>
);

export default RootStackScreens;
