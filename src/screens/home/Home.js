import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  useWindowDimensions,
} from 'react-native';
import PostDivider from '../../components/PostDivider';
import CreatePost from './creatingContent/CreatePost';
import PostsList from './posts/PostsList';
import TopPanelIndex from './topPanel/Index';

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CreatePost />
        <PostDivider />
        <TopPanelIndex />
        <PostDivider />
        <PostsList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
