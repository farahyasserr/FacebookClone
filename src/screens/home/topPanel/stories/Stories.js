import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import Resize from '../../../../common/Resize';
import stories from '../../../../data/StoriesDummyData';
import CreateStory from './CreateStory';
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
        style={styles.list}
        horizontal
        ListHeaderComponent={<CreateStory />}
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
  list:{
  }
});
export default Stories;
