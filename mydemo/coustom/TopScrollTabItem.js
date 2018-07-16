import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View
} from 'react-native';

import PropTypes from 'prop-types'


export default class TopScrollTabItem extends Component {

  static propType = {
    goToPage: PropTypes.func,
    activeTab: PropTypes.number,
    tabs: PropTypes.array,
    tabNames: PropTypes.array,
    tabIconNames: PropTypes.array,
    selectedTabIconNames: PropTypes.array
  };


  render() {
    return (
      <View style={styles.tabs}>
        {this.props.tabs.map((tab, i) => {
          let color = this.props.activeTab === i ? '#2c2c2c' : '#666';
          let bottomLinecolor = this.props.activeTab === i ? '#2c2c2c' : '#fff';
          let icon = this.props.activeTab == i ? this.props.selectedTabIconNames[i] : this.props.tabIconNames[i];
          return (
            <TouchableOpacity
              key={i}
              activeOpacity={0.8}
              style={styles.tab}
              onPress={() => this.props.goToPage(i)}>
                <View style={styles.tabItem}>
                  <Image
                    style={styles.icon}
                    source={icon}/>
                  <Text style={{color: color, fontSize: 12, marginLeft: 3}}>
                    {this.props.tabNames[i]}
                  </Text>
                </View>
              <Text style={{backgroundColor: bottomLinecolor, height: 2, width: 55,alignItems:'flex-end'}}/>
            </TouchableOpacity>
          )
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 20
  },
  tabs: {
    flexDirection: 'row',
    height: 45,
    backgroundColor: '#ffffff',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    flexDirection:'column',
    justifyContent:'space-between'
  },
  tabItem: {
    flex:1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  icon: {
    width: 21,
    height: 21,
  }
});