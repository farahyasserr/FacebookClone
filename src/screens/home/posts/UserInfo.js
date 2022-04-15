import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import fonts from '../../../assets/Fonts';
import Resize from '../../../common/Resize';
import ProfileIcon from './ProfileIcon';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import Icon4 from 'react-native-vector-icons/Ionicons';
import PostSettingsComponent from './PostSettingsComponent';
import colors from '../../../common/Colors';

const UserInfo = ({user, post}) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstSubContainer}>
        <ProfileIcon uri={user.icon} user={user} />
        <View style={styles.horizontalView}>
          <View style={styles.nameAndSettingsContainer}>
            <Text style={styles.nameText}>{user.name}</Text>
            <PostSettingsComponent />
          </View>
          <View style={styles.postInfoContainer}>
            <Text style={styles.dateText}>{user.date} . </Text>
            {post.is_public === true ? (
              <Icon4 name="ios-earth" size={12} color={colors.black} />
            ) : (
              <Icon3
                name="user-friends"
                size={10}
                style={{alignSelf: 'center'}}
                color={colors.black}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Resize(10),
  },
  nameText: {
    marginStart: Resize(10),
    fontFamily: fonts.montserrat_medium,
    color: colors.black,
  },
  firstSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  dateText: {
    fontFamily: fonts.montserrat_regular,
    fontSize: Resize(14),
    marginStart: Resize(10),
    color: colors.black,
  },
  postInfoContainer: {
    flexDirection: 'row',
  },
  nameAndSettingsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  horizontalView: {
    flex: 1,
  },
});
export default UserInfo;
