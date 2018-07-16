/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 *
 * 个人中心
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Person extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>个人中心</Text>
      </View>

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
});
