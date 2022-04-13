import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import fonts from '../../../assets/Fonts';
import Resize, {width} from '../../../common/Resize';
import Separator from '../../../components/Separator';
import InteractionPanel from './InteractionPanel';
import UserInfoComponent from './UserInfoComponent';

const Post = ({item}) => {
  return (
    <View style={styles.postContainer}>
      <UserInfoComponent user={item.from} />
      <View style={styles.messageContainer}>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      {item.image !== null && (
        <Image
          style={styles.postImage}
          source={{
            uri: item.image,
          }}
        />
      )}
      <Separator />
      <InteractionPanel />
      <Separator />
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    padding: Resize(30),
  },
  message: {
    fontFamily: fonts.montserrat_regular,
  },
  postContainer: {
    backgroundColor: 'white',
    paddingVertical: Resize(10),
  },
  postImage: {
    width: width,
    height: Resize(300),
    alignSelf: 'center',
    marginBottom: Resize(8),
  },
});
export default Post;