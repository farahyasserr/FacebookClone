import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import Resize from '../../../common/Resize';
import stories from '../../../data/StoriesDummyData';
import Story from './Story';

const Stories = () => {
  renderItem = ({item}) => {
    return <Story item={item} />;
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={stories}
        renderItem={renderItem}
        horizontal
        // ListHeaderComponent={<CreateStory />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: Resize(20),
    paddingHorizontal: Resize(2),
  },
});
export default Stories;
