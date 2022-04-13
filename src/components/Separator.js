import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window')
const Separator = () => {
  return (          
    <View style={styles.separator}/>
  );
};

const styles=StyleSheet.create({
separator:{
 borderBottomWidth: 1,
 borderBottomColor: '#eee',
 width: width*0.9,
 alignSelf: 'center'
}
})

export default Separator;
