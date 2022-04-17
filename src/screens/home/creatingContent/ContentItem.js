import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import fonts from '../../../assets/Fonts';
import colors from '../../../common/Colors';
import Resize, {width} from '../../../common/Resize';

const ContentItem = ({item}) => {

  let {Package} = item;

  return (
    <TouchableOpacity style={styles.container}>
      <Package
        name={item.iconName}
        color={item.color}
        size={18}
        style={styles.icon}
      />
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 16,
    backgroundColor: colors.white,
    paddingHorizontal: Resize(10),
    paddingVertical: Resize(10),
    alignItems: 'center',
    marginVertical: Resize(10),
    marginEnd: Resize(10),
    width: width / 4 - Resize(10),
    justifyContent: 'center',
  },
  text: {
    paddingHorizontal: Resize(4),
    fontFamily: fonts.montserrat_medium,
    fontSize: Resize(16),
  },
  icon: {
    marginEnd: Resize(4),
  },
});

export default ContentItem;
