import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch} from 'react-redux';
import * as Animatable from 'react-native-animatable';
import { bindActionCreators } from 'redux';
import {signIn} from '../redux/actions/authAction'
export default function SignIn({navigation}) {
  const [data, setData] = useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    dispatch(signIn(data.email,data.password));
  };
  const textInputChange = val => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };
  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };
  const updateSecureTextEntry = val => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  return (
    <View style={styles.container}>
     <StatusBar backgroundColor="coral" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.bigTitle}>Let's Come to Gather</Text>
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.title}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            placeholderTextColor="black"
            placeholder="Email"
            style={styles.input}
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={textInputChange}
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
        <TouchableOpacity style={styles.forgot}>
          <Text style={styles.forgotText}> Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleSubmit()
          }}>
          <Text style={{color: 'white', fontWeight: '500'}}> Sign in </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={{color: 'black', fontWeight: '500'}}> Sign Up </Text>
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
  signUpButton: {
    height: 33,
    borderRadius: 20,
    backgroundColor: '#dddeee',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});