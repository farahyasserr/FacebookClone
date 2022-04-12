import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;

export default Resize = size => {
  return (parseInt(size) * screenWidth) / 500;
};