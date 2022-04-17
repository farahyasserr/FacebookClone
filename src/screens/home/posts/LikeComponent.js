import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Resize from '../../../common/Resize';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../../common/Colors';
import fonts from '../../../assets/Fonts';
import * as Animatable from 'react-native-animatable';

const LikeComponent = () => {
  const [liked, setLiked] = useState(false);
  const [animate, setAnimate] = useState('');

  const likeHandler = () => {
    setLiked(!liked);
  };

  useEffect(() => {
    if (liked === true) setAnimate('tada');
    else setAnimate('');
  }, [liked]);

  const longPressHandler = () => {
    Alert.alert('long press');
  };

  return (
    <TouchableOpacity
      style={styles.subcontainer}
      onPress={likeHandler}
      onLongPress={longPressHandler}>
      <Animatable.View animation={animate} duration={500}>
        <Icon
          name={liked === true ? 'like1' : 'like2'}
          size={20}
          color={liked === true ? colors.blue : 'black'}
        />
      </Animatable.View>

      <Text
        style={{
          ...styles.text,
          color: liked === true ? colors.blue : 'black',
          fontFamily:
            liked === true ? fonts.montserrat_bold : fonts.montserrat_regular,
        }}>
        Like
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  subcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    marginStart: Resize(8),
    alignSelf: 'flex-end',
  },
});

export default LikeComponent;
