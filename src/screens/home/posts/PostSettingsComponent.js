import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import fonts from '../../../assets/Fonts';
import Resize, {width} from '../../../common/Resize';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';

const PostSettingsComponent = () => {
  return (
    <View style={styles.subcontainer}>
      <TouchableOpacity>
        <Icon2 name="more-horizontal" size={20} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="close" size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  subcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginEnd: Resize(10),
  },
});
export default PostSettingsComponent;
