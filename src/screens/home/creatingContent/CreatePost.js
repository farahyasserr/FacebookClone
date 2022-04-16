import React from 'react';
import {View, StyleSheet} from 'react-native';
import ContentList from './ContentList';
import InputComponent from './InputComponent';

const CreatePost = () => {
  return (          
    <View style={styles.createPostContainer}>
        <InputComponent />
        <ContentList />
    </View>
  );
};

const styles = StyleSheet.create({
    createPostContainer:{
        backgroundColor: '#eee'
    }
})

export default CreatePost;
