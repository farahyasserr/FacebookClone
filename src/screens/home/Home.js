import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import PostDivider from '../../components/PostDivider';
import CreatePost from './creatingContent/CreatePost';
import PostsList from './posts/PostsList';
import Reels from './reels/Reels';
import Stories from './stories/Stories';

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CreatePost />
        <PostDivider />
        {/* <Reels /> */}
        <Stories />
        <PostDivider />
        <PostsList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
