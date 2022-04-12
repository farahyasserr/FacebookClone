import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Resize from '../../common/Resize';

const ProfileIcon = ({uri}) => {
  return (
    <TouchableOpacity style={styles.imageContainer}>
      <Image
        style={styles.icon}
        source={{
          uri: uri,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: Resize(50),
    width: Resize(50)
  },
  imageContainer:{
      borderRadius: Resize(50)/2,
      overflow: 'hidden',
      backgroundColor: 'red',
  }
});
export default ProfileIcon;
