import React, {useState} from 'react';
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import colors from '../../../common/Colors';
import Reels from './reels/Reels';
import Rooms from './rooms/Rooms';
import Stories from './stories/Stories';

const FirstRoute = () => <Stories />;
const SecondRoute = () => <Reels />;
const thirdRoute = () => <Rooms />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: thirdRoute,
});

const Index = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Stories'},
    {key: 'second', title: 'Reels'},
    {key: 'third', title: 'Rooms'},
  ]);

  const layout = useWindowDimensions();

  return (
    <View style={{height: Resize(300)}}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        swipeEnabled={false}
        initialLayout={{width: layout.width}}
        renderTabBar={props => (
          <TabBar
            pressOpacity={10}
            renderLabel={({route, focused}) => (
              <View>
                <Text
                  style={{
                    color: focused ? colors.blue : colors.gray,
                    fontWeight: '700',
                  }}>
                  {route.title}
                </Text>
              </View>
            )}
            style={{backgroundColor: 'white'}}
            indicatorStyle={{backgroundColor: colors.blue}}
            {...props}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Index;
