'use strict'
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  LogBox,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

LogBox.ignoreLogs(['RCTBridge']);

import * as Animatable from 'react-native-animatable';

export default function SignUp({navigation}) {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAuthorized: false,
    checkNameChange:false,
    check_textInputChange: false,
    confirmSecureTextEntry: true,
    secureTextEntry: true,
  });

  const handleSubmit = async () => {
 
      const user = {
        name: data.name,
        surname: data.surname,
        email: data.email,
        password: data.password,
      };
      await api
        .post('/users', user)
        .then(response => {
          alert(JSON.stringify(response.data.message));
          navigation.navigate('SignIn');
        })
        .catch(err => console.log('api Erorr: ', err));
    
  };
  
  const validateEmail=(val)=>{
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (reg.test(val) === false){
        setData({
          ...data,
          email: val,
          check_textInputChange: false,
        });
      }else {
        setData({
          ...data,
          email: val,
          check_textInputChange: true,
        });
      }
  };
  const nameInputChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        name: val,
        checkNameChange: true,
      });
    } else {
      setData({
        ...data,
        name: val,
        checkNameChange: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = val => {
    setData({
      ...data,
      confirmPassword: val,
    });
  };

  const updateSecureTextEntry = val => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = val => {
    setData({
      ...data,
      confirmSecureTextEntry: !data.confirmSecureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="coral" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.bigTitle}>Let's Come to Gather</Text>
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.title}>Name </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            placeholderTextColor="black"
            placeholder="First Name"
            style={styles.input}
            autoCapitalize="none"
            onChangeText={(text) => nameInputChange(text)}
          />

          {data.checkNameChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={15} />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={styles.title}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            placeholderTextColor="black"
            placeholder="Email"
            style={styles.input}
            autoCapitalize="none"
            onChangeText={(text) => validateEmail(text)}
          />

          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={15} />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={styles.title}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" size={20} />
          <TextInput
            placeholderTextColor="black"
            placeholder="Password"
            style={styles.input}
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={val => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="black" size={15} />
            ) : (
              <Feather name="eye" color="black" size={15} />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={{color: 'white'}}> Sign up </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coral',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  footer: {
    backgroundColor: 'white',
    padding: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 3,
  },
  button: {
    height: 33,
    borderRadius: 20,
    backgroundColor: 'coral',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    padding: 5,
  },
  title: {
    padding: 6,
    marginTop: 4,
  },
  bigTitle: {
    color: '#2d0002',
    fontFamily: 'DancingScript-SemiBold',
    fontSize: 32,
    fontWeight: '800',
  },
  forgot: {
    marginTop: 12,
    alignItems: 'flex-end',
  },
  forgotText: {
    fontWeight: '500',
    color: '#a45d42',
    fontFamily: 'Roboto-Regular',
  },
});