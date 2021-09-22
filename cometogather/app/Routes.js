import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import RootStackScreen from './screens/navigation/RootStackScreens';
import HomeScreen from './screens/HomeScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

const Routes = props => {
  return props.isLoggedIn ? <HomeScreen /> : <RootStackScreen />   
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(Routes);
