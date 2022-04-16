import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import fonts from '../../../assets/Fonts';
import colors from '../../../common/Colors';

const Rooms = () => {
  return (
    <LinearGradient
    colors={['#809fff','#3366ff', '#0040ff']}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.text}>Coming Soon!</Text>
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text:{
      color: colors.white,
      fontFamily: fonts.montserrat_bold
  }
});
export default Rooms;
