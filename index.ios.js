/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
      AppRegistry,
      StyleSheet,
      Text,
      View,
    ScrollView,
    TouchableHighlight
} from 'react-native';

import Util from './js/Util';

class MainView extends Component {
  constructor() {
    super();

    this.state = {
      days: [
        {
          key:0,
          title:"A stopwatch",
          component: Day1,
          isFA: false,
          icon: "ios-stopwatch",
          size: 48,
          color: "#ff856c",
          hideNav: false,
        },
        {
          key:1,
          title:"A weather app",
          component: Day2,
          isFA: false,
          icon: "ios-partlysunny",
          size:60,
          color:"#90bdc1",
          hideNav: true,
        },{
          key:2,
          title:"twitter",
          component: Day3,
          isFA: false,
          icon: "social-twitter",
          size:50,
          color:"#2aa2ef",
          hideNav: true,
        },{
          key:3,
          title:"cocoapods",
          component: Day4,
          isFA: true,
          icon: "contao",
          size:50,
          color:"#FF9A05",
          hideNav: false,
        },{
          key:4,
          title:"find my location",
          component: Day5,
          isFA: false,
          icon: "ios-location",
          size:50,
          color:"#00D204",
          hideNav: false,
        },{
          key:5,
          title:"Spotify",
          component: Day6,
          isFA: true,
          icon: "spotify",
          size:50,
          color:"#777",
          hideNav: true,
        },{
          key:6,
          title:"Moveable Circle",
          component: Day7,
          isFA: false,
          icon: "ios-baseball",
          size:50,
          color:"#5e2a06",
          hideNav: true,
        },{
          key:7,
          title:"Swipe Left Menu",
          component: Day8,
          isFA: true,
          icon: "google",
          size:50,
          color:"#4285f4",
          hideNav: true,
        },{
          key:8,
          title:"Twitter Parallax View",
          component: Day9,
          isFA: false,
          icon: "social-twitter-outline",
          size:50,
          color:"#2aa2ef",
          hideNav: true,
        },{
          key:9,
          title:"Tumblr Menu",
          component: Day10,
          isFA: false,
          icon: "social-tumblr",
          size:50,
          color:"#37465c",
          hideNav: true,
        },{
          key:10,
          title:"OpenGL",
          component: Day11,
          isFA: false,
          icon: "contrast",
          size:50,
          color:"#2F3600",
          hideNav: false,
        },{
          key:11,
          title:"charts",
          component: Day12,
          isFA: false,
          icon: "stats-bars",
          size:50,
          color:"#fd8f9d",
          hideNav: false,
        },{
          key:12,
          title:"tweet",
          component: Day13,
          isFA: false,
          icon: "chatbox-working",
          size:50,
          color:"#83709d",
          hideNav: true,
        },{
          key:13,
          title:"tinder",
          component: Day14,
          isFA: false,
          icon: "fireball",
          size:50,
          color:"#ff6b6b",
          hideNav: true,
        }
      ]
    }
  }

    render() {
        var boxes = this.state.days.map((elem, index) => {

        })

        return (
            <ScrollView>
                <View style={styles.touchBoxContainer}>
                </View>
            </ScrollView>
        );
    }
}

class ReactNativeGridDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

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
    touchBoxContainer: {

    }
});

AppRegistry.registerComponent('ReactNativeGridDemo', () => ReactNativeGridDemo);
