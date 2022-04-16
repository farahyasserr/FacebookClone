import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import colors from '../../../common/Colors';
import Resize from '../../../common/Resize';
import userData from '../../../data/MyAccountDummyData';
import Icon from 'react-native-vector-icons/Entypo';

const CreateStory = () => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <Image
        source={{uri: userData.image}}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.largerCircularContainer}>
        <View style={styles.circularPlusContainer}>
          <Icon name="plus" size={28} color={colors.white} />
        </View>
      </View>
      <Text style={styles.text}>Create {`\n`} story</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  largerCircularContainer: {
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Resize(190) / 4 / 2,
    width: Resize(190) / 4,
    height: Resize(190) / 4,
    top: -Resize(190) / 4 / 2,
  },
  circularPlusContainer: {
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Resize(160) / 4 / 2,
    width: Resize(160) / 4,
    height: Resize(160) / 4,
  },
  mainContainer: {
    borderRadius: 10,
    marginEnd: Resize(10),
    height: Resize(190),
    overflow: 'hidden',
    backgroundColor: '#eee',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: colors.lightgray
  },
  image: {
    height: Resize(190) * 0.6,
    width: Resize(120),
  },
  text: {
    top: -Resize(190) / 4 / 3,
    fontSize: Resize(14),
    textAlign: 'center',
    fontWeight: '600'

  },
});

export default CreateStory;
