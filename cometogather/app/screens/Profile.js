import * as React from 'react';
import {StyleSheet, Text, View,useWindowDimensions, Image, TouchableOpacity} from 'react-native';
import { TabView,TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'white' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});


export default function Profile(){
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <Text style={styles.userTokens}>Yunus Emre Akgun </Text>
        <Image
          style={styles.avatar}
          source={{
            uri:
              'https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
          }}
        />
        <View style={[styles.userInfo, styles.bordered]}>
          <View style={styles.section}>
            <Text category="s1" style={styles.space}>
              6
            </Text>
            <TouchableOpacity>
              <Text appearance="hint" category="s2">
                Clubs
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.section}>
            <Text category="s1" style={styles.space}>
              10
            </Text>
            <TouchableOpacity>
              <Text appearance="hint" category="s2">
                Sub-Clubs
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.section}>
            <Text category="s1" style={styles.space}>
              0
            </Text>
            <TouchableOpacity>
              <Text appearance="hint" category="s2">
                Infos
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TabViewScreen/>
      </View>
    );
}
const TabViewScreen =()=> {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Clubs' },
    { key: 'second', title: 'Sub-Clubs' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      style={{backgroundColor:'#694fad'}}
      indicatorStyle={{ backgroundColor: 'yellow'}}
    />
  );

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  header: {
    backgroundColor: '#694fad',
    height: 180,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    justifyContent: 'center',
    marginLeft: 50,
    position: 'absolute',
    marginTop: 110,
  },
  name: {
    marginTop: 30,
    fontSize: 22,
    color: 'black',
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  userInfo: {
    marginTop: 60,
    flexDirection: 'row',
    paddingVertical: 18,
  },
  bordered: {
    borderBottomWidth: 1,
  },
  section: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  space: {
    marginBottom: 3,
  },
  userTokens: {
    position: 'absolute',
    marginTop: 150,
    marginLeft: 210,
    color: 'white',
    fontWeight: '600',
  }
});