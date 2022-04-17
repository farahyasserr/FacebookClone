import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import fonts from '../../../assets/Fonts';
import Resize from '../../../common/Resize';
import ProfileIcon from '../../../components/ProfileIcon';
import PostSettings from './PostSettings';
import colors from '../../../common/Colors';
import PostAudience from './PostAudienceContainer';

const UserInfo = ({user, post}) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstSubContainer}>
        <ProfileIcon uri={user.icon} user={user} />
        <View style={styles.horizontalView}>
          <View style={styles.nameAndSettingsContainer}>
            <Text style={styles.nameText}>{user.name}</Text>
            <PostSettings />
          </View>
          <PostAudience user={user} post={post} />
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
  nameAndSettingsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  horizontalView: {
    flex: 1,
  },
});
export default UserInfo;
