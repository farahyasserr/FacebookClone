import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Resize from '../../common/Resize';
import ProfileIcon from './ProfileIcon';

const UserInfoComponent = ({user}) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstSubContainer}>
        <ProfileIcon uri={user.icon} />
        <Text style={styles.nameText}>{user.name}</Text>
      </View>
      <View style={styles.secondSubContainer}>
        <Text>temp</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Resize(10),
  },
  nameText: {
    marginStart: Resize(10),
  },
  firstSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  secondSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default UserInfoComponent;
