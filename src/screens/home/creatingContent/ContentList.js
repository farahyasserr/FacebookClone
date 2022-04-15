import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import list from '../../../data/ContentDummyData';
import ContentItem from './ContentItem';

const ContentList = () => {
    const renderItem = ({item}) =>{
        return <ContentItem item={item}/>
    }
  return (          
    <>
    <FlatList data={list} renderItem={renderItem} horizontal />
    </>
  );
};

const styles = StyleSheet.create({
    
})

export default ContentList;
