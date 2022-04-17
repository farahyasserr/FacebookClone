import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import fonts from '../../../../assets/Fonts';
import colors from '../../../../common/Colors';
import Resize from '../../../../common/Resize';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CreateReel = () => {
  return (
    <LinearGradient
      colors={['#ff9966', '#ff6666', '#ff4d88', '#ff4d88']}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}
      style={styles.container}>
      <TouchableOpacity style={styles.container}>
        <View style={styles.upperContainer}>
          <View style={styles.circularView}>
            <Icon
              name="movie-open-plus"
              size={23}
              style={styles.shadow}
              color="#ff6666"
            />
          </View>
        </View>
        <Text style={styles.text}>Create reel</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Resize(190),
    width: Resize(120),
    borderRadius: 10,
    marginEnd: Resize(10),
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: colors.lightgray,
  },
  text: {
    color: colors.white,
    fontFamily: fonts.montserrat_medium,
    textAlign: 'center',
    fontSize: Resize(16),
    paddingBottom: Resize(12),
  },
  circularView: {
    width: Resize(60),
    height: Resize(60),
    borderRadius: Resize(60) / 2,
    backgroundColor: colors.white,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Resize(12),
  },
  shadow: {
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  upperContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CreateReel;
