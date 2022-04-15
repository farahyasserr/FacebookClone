import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import Resize from '../../../common/Resize';
import reels from '../../../data/ReelsDummyData';
import CreateReel from './CreateReel';
import ReelItem from './ReelItem';

const Reels = () => {
  renderItem = ({item}) => {
    return <ReelItem item={item} />;
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={reels}
        renderItem={renderItem}
        horizontal
        ListHeaderComponent={<CreateReel />}
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
export default Reels;
