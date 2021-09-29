import React, {useState,useRef} from 'react';
import {GiftedChat, Bubble, Send} from 'react-native-gifted-chat';
import {View, StyleSheet} from 'react-native';
import {IconButton} from 'react-native-paper';


export default  Chat = ({roomId}) =>{
    return (
        <View>
            <Text style={styles.sendingContainer}>
                Yunus
            </Text>
        </View>
    )
  
}

const styles = StyleSheet.create({
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  componentStyle: {
    alignItems: 'center',
    color: '#ffff',
    backgroundColor: '#baaeea',
    width: 30,
    height: 30,
  },
});