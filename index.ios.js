/**
 * Sample React Native App
 * https://github.com/tengontheway/ReactNativeGridDemo
 * @flow
 * 参照: https://github.com/fangwei716/30-days-of-react-native
 */


import React, { Component } from 'react';
import {
      AppRegistry,
      StyleSheet,
      Text,
      View,
    ScrollView,
    TouchableHighlight,
  Image
} from 'react-native';

import Util from './js/Util';
import GridView from './js/components/GridView';
var MOVIES_PER_ROW = 4;


class ReactNativeGridDemo extends Component {
  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {
        dataSource: [
          {
            key:0,
            title:"A stopwatch",
            component: null,
            isFA: false,
            icon: "ios-stopwatch",
            size: 48,
            color: "#ff856c",
            hideNav: false,
            src: require('./img/icon.png'),
          },
          {
            key:1,
            title:"A weather app",
            component: null,
            isFA: false,
            icon: "ios-partlysunny",
            size:60,
            color:"#90bdc1",
            hideNav: true,
            src: require('./img/icon.png'),
          },{
            key:2,
            title:"twitter",
            component: null,
            isFA: false,
            icon: "social-twitter",
            size:50,
            color:"#2aa2ef",
            hideNav: true,
            src: require('./img/icon.png'),
          },{
            key:3,
            title:"cocoapods",
            component: null,
            isFA: true,
            icon: "contao",
            size:50,
            color:"#FF9A05",
            hideNav: false,
            src: require('./img/icon.png'),
          },{
            key:4,
            title:"find my location",
            component: null,
            isFA: false,
            icon: "ios-location",
            size:50,
            color:"#00D204",
            hideNav: false,
            src: require('./img/icon.png'),
          },{
            key:5,
            title:"Spotify",
            component: null,
            isFA: true,
            icon: "spotify",
            size:50,
            color:"#777",
            hideNav: true,
            src: require('./img/icon.png'),
          },{
            key:6,
            title:"Moveable Circle",
            component: null,
            isFA: false,
            icon: "ios-baseball",
            size:50,
            color:"#5e2a06",
            hideNav: true,
            src: require('./img/icon.png'),
          },{
            key:7,
            title:"Swipe Left Menu",
            component: null,
            isFA: true,
            icon: "google",
            size:50,
            color:"#4285f4",
            hideNav: true,
            src: require('./img/icon.png'),
          },{
            key:8,
            title:"Twitter Parallax View",
            component: null,
            isFA: false,
            icon: "social-twitter-outline",
            size:50,
            color:"#2aa2ef",
            hideNav: true,
            src: require('./img/icon.png'),
          },{
            key:9,
            title:"Tumblr Menu",
            component: null,
            isFA: false,
            icon: "social-tumblr",
            size:50,
            color:"#37465c",
            hideNav: true,
            src: require('./img/icon.png'),
          },{
            key:10,
            title:"OpenGL",
            component: null,
            isFA: false,
            icon: "contrast",
            size:50,
            color:"#2F3600",
            hideNav: false,
            src: require('./img/icon.png'),
          },{
            key:11,
            title:"charts",
            component: null,
            isFA: false,
            icon: "stats-bars",
            size:50,
            color:"#fd8f9d",
            hideNav: false,
            src: require('./img/icon.png'),
          },{
            key:12,
            title:"tweet",
            component: null,
            isFA: false,
            icon: "chatbox-working",
            size:50,
            color:"#83709d",
            hideNav: true,
            src: require('./img/icon.png'),
          },{
            key:13,
            title:"tinder",
            component: null,
            isFA: false,
            icon: "fireball",
            size:50,
            color:"#ff6b6b",
            hideNav: true,
            src: require('./img/icon.png'),

          }
        ]
      };
    }

  render() {
    return (
        <GridView
            items={this.state.dataSource}
            itemsPerRow={MOVIES_PER_ROW}
            renderItem={(item, index) => this.renderItem(item, index) }
            style={styles.listView}
        />
    );
  }


  onPressItem(index) {

  }

  renderItem(item, index) {
    return (
        <TouchableHighlight
            key={item.key}
            style={[styles.touchBox, item.key%MOVIES_PER_ROW === MOVIES_PER_ROW-1? styles.touchBox2:styles.touchBox1]}
            underlayColor="#eee" onPress={() => this.onPressItem(index)}>

          <View style={styles.boxContainer}>
            <Image source={item.src} style={styles.boxIcon} />
            <Text style={styles.boxText}>Idx{item.key}</Text>
          </View>
        </TouchableHighlight>
    );
  }
}

// @notice absolute position
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  touchBox: {
    width: Util.size.width/MOVIES_PER_ROW-0.33334,
    height: Util.size.width/MOVIES_PER_ROW,
    backgroundColor: '#fff'
  },
  touchBox1: {
    borderBottomWidth: Util.pixel,
    borderBottomColor:"#ccc",
    borderRightWidth: Util.pixel,
    borderRightColor:"#ccc",
  },
  touchBox2: {
    borderBottomWidth: Util.pixel,
    borderBottomColor:"#ccc",
  },
    touchBoxContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: Util.size.width,
      borderTopWidth: Util.pixel,
      borderTopColor:"#ccc",
    },
  boxContainer: {
    alignItems:"center",
    justifyContent:"center",
    width: Util.size.width/MOVIES_PER_ROW,
    height:Util.size.width/MOVIES_PER_ROW,
  },
  boxIcon:{
    position:"relative",
    top:-10,
    width: 30,
    height: 30,
  },
  boxText: {
    position:"absolute",
    bottom:15,
    width:Util.size.width/MOVIES_PER_ROW,
    textAlign:"center",
    left: 0,
    backgroundColor:"transparent"
  },
  listView: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('ReactNativeGridDemo', () => ReactNativeGridDemo);
