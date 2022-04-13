import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import fonts from '../../assets/Fonts';
import UserInfoComponent from './UserInfoComponent';

const Post = ({item}) => {
  return (
    <View>
      <UserInfoComponent user={item.from} />
      <View style={styles.messageContainer}>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    padding: 10,
  },
  message:{
    fontFamily: fonts.montserrat_regular,
  }
});
export default Post;
