import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Resize from '../../../common/Resize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LikeComponent from './LikeComponent';
import colors from '../../../common/Colors';

const InteractionPanel = () => {

  return (
    <View style={styles.mainContainer}>
      <LikeComponent />
      <TouchableOpacity style={styles.subcontainer}>
        <Icon name="comment-outline" size={20} color={colors.black}/>
        <Text style={styles.text}>Comment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.subcontainer}>
        <Icon name="share-outline" size={24} color={colors.black} />
        <Text style={styles.text}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Resize(10),
  },
  subcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex:1,
    justifyContent: 'center'
  },
  text:{
    marginStart: Resize(8),
    color: colors.black,
  }
});

export default InteractionPanel;
