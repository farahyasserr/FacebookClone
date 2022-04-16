import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Ionicons';
import fonts from '../../../assets/Fonts';
import colors from '../../../common/Colors';

const PostAudienceContainer = ({user, post}) => {
  return (
    <View style={styles.postInfoContainer}>
      <Text style={styles.dateText}>{user.date} . </Text>
      {post.is_public === true ? (
        <Icon2 name="ios-earth" size={12} color={colors.black} />
      ) : (
        <Icon
          name="user-friends"
          size={10}
          style={styles.icon}
          color={colors.black}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  dateText: {
    fontFamily: fonts.montserrat_regular,
    fontSize: Resize(14),
    marginStart: Resize(10),
    color: colors.black,
  },
  postInfoContainer: {
    flexDirection: 'row',
  },
  icon: {alignSelf: 'center'},
});

export default PostAudienceContainer;
