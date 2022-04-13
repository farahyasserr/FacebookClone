import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import Resize from '../../../common/Resize';

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
    height: Resize(48),
    width: Resize(48)
  },
  imageContainer:{
      borderRadius: Resize(48)/2,
      overflow: 'hidden',
      alignSelf: 'flex-start',
  }
});
export default ProfileIcon;
