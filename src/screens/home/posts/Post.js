import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import fonts from '../../../assets/Fonts';
import colors from '../../../common/Colors';
import Resize, {width} from '../../../common/Resize';
import Separator from '../../../components/Separator';
import InteractionPanel from './InteractionPanel';
import UserInfo from './UserInfo';
import PropTypes from 'prop-types';

const Post = ({item}) => {
  return (
    <View style={styles.postContainer}>
      <UserInfo user={item.from} post={item} />
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
    padding: Resize(18),
  },
  message: {
    fontFamily: fonts.montserrat_regular,
    color: colors.black,
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


Post.propTypes = {
  item: PropTypes.object,
}

export default Post;
