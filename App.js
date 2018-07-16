/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import BottomTabBar from './mydemo/coustom/BottomTabBar'
import HomePage from './mydemo/mypages/Home'
import ClassfyPage from './mydemo/mypages/Classfy'
import PersonPage from './mydemo/mypages/Person'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabLabels: ['首页', '分类', '我的'],
      normalIcons: ['ios-home-outline', 'ios-pricetags-outline', 'ios-person-outline'],
      selectIcons: ['ios-home', 'ios-pricetags','ios-person'],
    }
  }

  render() {
    return (
      <ScrollableTabView
        tabBarPosition='bottom'
        initialPage={0} //默认为第一页
        locked={true} //表示手指是否能拖动视图，默认为false（表示可以拖动）。设为true的话，我们只能点击Tab来切换视图。
        renderTabBar={() =>   <BottomTabBar
          tabNames={this.state.tabLabels}
          tabIconNames={this.state.normalIcons}
          selectedTabIconNames={this.state.selectIcons}/>} // 可使用自定义控件 也可以使用默认的ScrollableTabView
        tabBarBackgroundColor='#fff'
        tabBarActiveTextColor='#2c2c2c'
        tabBarInactiveTextColor='#666'
      >
        <View style={styles.container}><HomePage/></View>
        <View style={styles.container}><ClassfyPage/></View>
        <View style={styles.container}><PersonPage/></View>
      </ScrollableTabView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
});
