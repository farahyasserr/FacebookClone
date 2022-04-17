import React from 'react';
import {FlatList} from 'react-native';
import PostDivider from '../../../components/PostDivider';
import data from '../../../data/TimelineDummyData';
import Post from './Post';

const PostsList = () => {
  const renderItem = ({item, index}) => {
    return <Post item={item} index={index} />;
  };

  const itemSeparator = () => {
    return <PostDivider />;
  };

  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparator}
      />
    </>
  );
};

export default PostsList;