import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Resize from '../../../common/Resize';
import Icon from 'react-native-vector-icons/Entypo';
import colors from '../../../common/Colors';
import fonts from '../../../assets/Fonts';

const ReelItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.reelContainer}>
      <Image
        source={{uri: item.image}}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.viewsContainer}>
        <Icon
          name="controller-play"
          size={18}
          style={styles.icon}
          color={colors.white}
        />
        <Text style={styles.viewsText}>{item.views}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: Resize(180),
    width: Resize(120),
  },
  reelContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    marginEnd: Resize(10),
  },
  viewsText: {
    color: colors.white,
    fontSize: Resize(16),
    fontWeight: 'bold',
  },
  viewsContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'transparent',
      position: 'absolute',
      bottom: Resize(8),
      marginStart: Resize(10),
  }
});

export default ReelItem;
