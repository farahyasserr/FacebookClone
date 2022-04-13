import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Resize from '../../../common/Resize';
import userData from '../../../data/MyAccountDummyData';
import ProfileIcon from '../post/ProfileIcon';
import Icon from 'react-native-vector-icons/FontAwesome5';

const InputComponent = () => {
  const [postMessage, setPostMessage] = useState('');

  const changeTextHandler = val => {
    setPostMessage(val);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <ProfileIcon uri={userData.image} />
        <TextInput
          value={postMessage}
          onChangeText={changeTextHandler}
          placeholder={`What's on your mind?`}
          style={styles.input}
          placeholderTextColor="black"
        />
      </View>
      <Icon name="images" size={20} color="green" style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: Resize(10),
    paddingVertical: Resize(14),
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  input: {
    marginStart: Resize(10),
  },
  subcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginEnd: Resize(14),
  },
});

export default InputComponent;
