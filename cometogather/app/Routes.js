import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

import HomeScreen from './screens/HomeScreen';
import {DrawerContent} from './screens/navigation/DrawerContent';

import MainTabScreen from './screens/navigation/MainTabScreen';
import SupportScreen from './screens/Details';
import ChatScreen from './screens/Chat/Chat';

const Drawer = createDrawerNavigator();
const Routes = props => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  
  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333',
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff',
    },
  };
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
  return (
    props.isLoggedIn ? (
          <HomeScreen />
        ) : (
          <Drawer.Navigator 
            drawerContent={props => <DrawerContent {...props} />}  screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="SupportScreen" component={SupportScreen} />
            <Drawer.Screen name="SettingsScreen" component={ChatScreen} />
            <Drawer.Screen name="ChatScreen" component={ChatScreen} />
          </Drawer.Navigator>
          ));
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(Routes);
