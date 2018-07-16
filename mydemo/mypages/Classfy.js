/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 *
 *  分类
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TopScrollTabItem from '../coustom/TopScrollTabItem'



// 正常展示的顶部图标
import hotNormalIcon from '../imgs/icon_hot_normal.png'
import recommendNormalIcon from '../imgs/icon_recommend_normal.png'
import videoNormalIcon from '../imgs/icon_video_normal.png'


// 选中的顶部图标
import hotSeclectIcon from '../imgs/icon_hot_select.png'
import recommendSeclectIcon from '../imgs/icon_recommend_select.png'
import videoSeclectIcon from '../imgs/icon_video_select.png'

export default class Classfys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabLabels: ['热门1', '推荐1', '视频1'],
      normalIcons: [hotNormalIcon,recommendNormalIcon,videoNormalIcon],
      selectIcons: [hotSeclectIcon,recommendSeclectIcon,videoSeclectIcon],
    }
  }

  render() {
    return (
      <ScrollableTabView
        initialPage={0} //默认为第一页
        locked={false} //表示手指是否能拖动视图，默认为false（表示可以拖动）。设为true的话，我们只能点击Tab来切换视图。
        renderTabBar={() =>
          <TopScrollTabItem
            tabNames={this.state.tabLabels}
            tabIconNames={this.state.normalIcons}
            selectedTabIconNames={this.state.selectIcons}/>} // 可使用自定义控件 也可以使用默认的ScrollableTabView
        tabBarBackgroundColor='#fff'
        tabBarActiveTextColor='#2c2c2c'
        tabBarInactiveTextColor='#666'
        tabBarUnderlineStyle={styles.tabBarUnderline}
      >
        <View style={styles.container}><Text>暂无数据</Text></View>
        <View style={styles.container}><Text>暂无数据</Text></View>
        <View style={styles.container}><Text>暂无数据</Text></View>
      </ScrollableTabView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
  },
  tabBarUnderline: {
    height: 2,
    backgroundColor: '#2c2c2c',
  },
});