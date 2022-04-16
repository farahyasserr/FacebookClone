import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Resize from '../../../common/Resize';
import colors from '../../../common/Colors';

const Story = ({item}) => {
  return (
    <TouchableOpacity style={styles.storyContainer}>
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
    height: Resize(190),
    width: Resize(120),
  },
  storyContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    marginEnd: Resize(10),
    borderColor: colors.lightgray,
    borderWidth: 0.5
  },
  viewsText: {
    color: colors.white,
    fontSize: Resize(16),
    fontWeight: 'bold',
  },
  viewsContainer:{
      flexDirection: 'row',
      backgroundColor: 'transparent',
      position: 'absolute',
      bottom: Resize(8),
      marginStart: Resize(10),
      width: '80%',
  }
});

export default Story;
