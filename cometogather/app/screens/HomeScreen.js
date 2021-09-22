import React from 'react';
import {TextInput, Text, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

const  HomeScreen=({user})=> {
  return (
    <View style={styles.container}>
      
      <Text>{user.email}</Text>
      <Text>{user.username}</Text>
    </View>
  );
}

const mapStateToProps =(state) =>{
  return {
    user:state.auth.user
  }
}

const styles = StyleSheet.create({
  container: {
      padding:40
  },
});

export default connect(mapStateToProps)(HomeScreen);