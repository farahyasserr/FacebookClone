import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Resize from '../../../common/Resize';
import colors from '../../../common/Colors';

const Story = ({item}) => {
  return (
    <TouchableOpacity style={styles.reelContainer}>
      <Image
        source={{uri: item.image}}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.viewsContainer}>
        <Text style={styles.viewsText}>{item.name}</Text>
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

export default Story;
