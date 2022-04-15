import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View} from 'react-native';
import colors from '../../../common/Colors';
import Resize from '../../../common/Resize';

const ProfileIcon = ({uri, user}) => {
  return (
    <View style={user?.has_story && styles.storyCircle}>
      <View style={user?.has_story && styles.whiteArea}>
        <TouchableOpacity style={styles.imageContainer}>
          <Image
            style={styles.icon}
            source={{
              uri: uri,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: Resize(48),
    width: Resize(48),
  },
  imageContainer: {
    borderRadius: Resize(48) / 2,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  storyCircle: {
    height: Resize(56),
    width: Resize(56),
    borderRadius: Resize(56) / 2,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center'
  },
  whiteArea:{
    height: Resize(50),
    width: Resize(50),
    borderRadius: Resize(50) / 2,
    backgroundColor: colors.white,
    justifyContent: 'center',
  }
});
export default ProfileIcon;
