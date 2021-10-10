import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ClubDetail = ({route}) => {

  const club = route.params.club;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{club.name}</Text>
        {club.members.map(member => (
          <View key={member._id}>
            <Text>{member.username}</Text>
            <Text>{member.avatar}</Text>
          </View>
        ))}
      </View>
      <View style={styles.footer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'center',
    fontFamily: 'Helvetica',
    textTransform: 'capitalize'
  },
  header: {
    flex: 7,
    paddingHorizontal: 10,
  },
  footer: {
    flex: 3,
  },
  text: {
    fontSize: 30,
  },
});

export default ClubDetail;
