import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import fonts from '../../../assets/Fonts';
import Resize from '../../../common/Resize';
import ProfileIcon from './ProfileIcon';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';

const UserInfoComponent = ({user}) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstSubContainer}>
        <ProfileIcon uri={user.icon} />
        <View>
          <Text style={styles.nameText}>{user.name}</Text>
          <Text style={styles.dateText}>{user.date}</Text>
        </View>
      </View>
      <View style={styles.secondSubContainer}>
        <TouchableOpacity>
          <Icon2 name="more-horizontal" size={20} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="close" size={20} />
        </TouchableOpacity>
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
    fontFamily: fonts.montserrat_medium,
  },
  firstSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  secondSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginEnd: Resize(10),
  },
  dateText:{
    fontFamily: fonts.montserrat_regular,
    fontSize: Resize(14),
    textAlign: 'center'
  }
});
export default UserInfoComponent;
