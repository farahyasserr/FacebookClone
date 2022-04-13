import {Dimensions} from 'react-native';

const {width,height} = Dimensions.get('window');

export default Resize = size => {
  return (parseInt(size) * width) / 500;
};

export {width,height};