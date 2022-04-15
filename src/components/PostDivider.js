import React from 'react';
import {View, StyleSheet} from 'react-native';
import Resize from '../common/Resize';

const PostDivider = () => {
  return (          
    <View style={styles.postDivider}/>
  );
};

const styles=StyleSheet.create({
postDivider:{
 backgroundColor: 'lightgray',
 height: Resize(10),
}
})

export default PostDivider;
