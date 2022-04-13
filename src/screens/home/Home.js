import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import PostDivider from '../../components/PostDivider';
import CreatePost from './creatingContent/CreatePost';
import PostsList from './PostsList';

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <CreatePost />
        <PostDivider />
        <PostsList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
