import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../constants/colors';
import { color, round } from 'react-native-reanimated';

Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default function Explore ({ navigation }){
  const popularData = [
    {
      id: '1',
      image: require('../assets/images/Illustration/Exploring.png'),
      title: 'Astronomy',
      memberCount: 32,
      rating: '4.8',
    },
    {
      id: '2',
      image: require('../assets/images/Illustration/Sports.png'),
      title: 'Basketball',
      memberCount: 45,
      rating: '4.6',
    },
    {
      id: '3',
      image: require('../assets/images/Illustration/Painter.png'),
      title: 'Natürmort',
      memberCount: 70,
      rating: '4.2',
    },
    {
      id: '4',
      image: require('../assets/images/Illustration/Security.png'),
      title: 'Dogs and Cats',
      memberCount: 70,
      rating: '4.2',
    },
  ];
  const categoriesData = [
    {
      id: '1',
      image: require('../assets/images/Illustration/Coronavirus.png'),
      title: 'Coronavirus',
      selected: true,
    },
    {
      id: '2',
      image: require('../assets/images/Illustration/Sports.png'),
      title: 'Sport',
      selected: false,
    },
    {
      id: '3',
      image: require('../assets/images/Illustration/MusicCelebrate.png'),
      title: 'Music',
      selected: false,
    },
    {
      id: '4',
      image: require('../assets/images/Illustration/Science.png'),
      title: 'Science',
      selected: false,
    }
  ];
  const renderCategoryItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={handleSelectedClub}
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor: item.selected ? "#d02860": colors.white,
            marginLeft: item.id == 1 ? 20 : 0,
          },
        ]}>
        <Image source={item.image} style={styles.categoryItemImage} />
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
        <View
          style={[
            styles.categorySelectWrapper,
            {
              backgroundColor: item.selected ? colors.white : colors.secondary,
            },
          ]}>
          <Feather
            name="chevron-right"
            size={8}
            style={styles.categorySelectIcon}
            color={item.selected ? colors.black : colors.white}
          />
        </View>
      </TouchableOpacity>
    );
  };
  const handleSelectedClub =(id)=>{

  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsHorizontalScrollIndicator={false}>
    
        {/* Search */}
        <View style={styles.searchWrapper}>
          <Feather name="search" size={16} color={colors.textDark} />
          <View style={styles.search}>
            <Text style={styles.searchText}>Search</Text>
          </View>
        </View>

        {/* Categories */}
        <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>Clubs</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>
        </View>

        {/* Popular */}
        <View style={styles.popularWrapper}>
          <Text style={styles.popularTitle}>Popular Sub-Clubs</Text>
          {popularData.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                navigation.navigate('Details', {
                  item: item,
                })
              }>
              <View
                style={[
                  styles.popularCardWrapper,
                  {
                    marginTop: item.id == 1 ? 10 : 20,
                  },
                ]}>
                <View>
                  <View>
                    <View style={styles.popularTopWrapper}>
                      <MaterialCommunityIcons
                        name="crown"
                        size={12}
                        color={colors.primary}
                      />
                      <Text style={styles.popularTopText}>top of the week</Text>
                    </View>
                    <View style={styles.popularTitlesWrapper}>
                      <Text style={styles.popularTitlesTitle}>
                        {item.title}
                      </Text>
                      <Text style={styles.popularTitlesWeight}>
                        Members {item.memberCount}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.popularCardBottom}>
                    <View style={styles.joinButton}>
                      <Text style={{fontSize:12,color:'white',fontWeight:"600"}}>Join now!</Text>
                    </View>
                    <View style={styles.ratingWrapper}>
                      <MaterialCommunityIcons
                        name="star"
                        size={10}
                        color={colors.textDark}
                      />
                      <Text style={styles.rating}>{item.rating}</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.popularCardRight}>
                  <Image source={item.image} style={styles.popularCardImage} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff6'
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titlesSubtitle: {
  
    fontSize: 16,
    color: colors.textDark,
  },
  titlesTitle: {
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
  },
  searchText: {
    fontSize: 14,
    marginBottom: 5,
    color: colors.textLight,
  },
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontSize: 16,
    paddingHorizontal: 20,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoryItemWrapper: {
    backgroundColor: '#F5CA48',
    borderBottomWidth:0.5,
    borderLeftWidth:0.5,
    borderTopEndRadius:20,
    marginRight: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.,
    shadowRadius: 10,
    elevation: 2,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 10,
  },
  categorySelectWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20,
  },
  categorySelectIcon: {
    alignSelf: 'center',
  },
  popularWrapper: {
    paddingHorizontal: 20,
    paddingBottom:5,
  },
  popularTitle: {
    fontSize: 16,
  },
  popularCardWrapper: {
    borderWidth:0.6,
    borderColor:"#dddd",
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularTopText: {
    marginLeft: 10,
    fontSize: 14,
  },
  popularTitlesWrapper: {
    marginTop: 20,
  },
  popularTitlesTitle: {
    fontSize: 14,
    color: colors.textDark,
  },
  popularTitlesWeight: {
    fontSize: 12,
    color: colors.textLight,
    marginTop: 5,
  },
  popularCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20,
  },
  joinButton: {
    backgroundColor: "#d02860",
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  rating: {
    fontSize: 12,
    color: colors.textDark,
    marginLeft: 5,
  },
  popularCardRight: {
    marginLeft: 40,
  },
  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});