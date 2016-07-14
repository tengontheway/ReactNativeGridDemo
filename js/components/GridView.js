/**
 * Created by tzt on 7/14/16.
 * https://github.com/tengontheway/ReactNativeGridDemo
 * 参考:https://github.com/lucholaf/react-native-grid-view
 */
'use strict';

import React, {Component} from 'react';

import {
    View,
    StyleSheet,
    ListView,
} from 'react-native';

export default class GridView extends React.Component
{
    static propTypes = {
        items: React.PropTypes.array.isRequired,
        itemsPerRow: React.PropTypes.number.isRequired,
        renderItem: React.PropTypes.func.isRequired,
    };

    // 构造
      constructor(props) {
        super(props);
      }

    // 将数据分行
    // @param items Array
    // @param itemsPerRow int 一行显示几个item
    groupItems(items, itemsPerRow) {
        var itemsGroups = [];
        var group = [];
        items.forEach((item) => {
            if (group.length === itemsPerRow) {
                itemsGroups.push(group);
                group = [item];
            } else {
                group.push(item);
            }
        });

        if (group.length > 0) {
            itemsGroups.push(group);
        }

        return itemsGroups;
    }

    // 渲染一行
    // @param 行数据(当前行的数据项数组)
    renderRow(row) {
        console.log("-------" + row);
        var that = this;
        var items = row.map((item, index) => {
            return that.props.renderItem(item, index);
        });
        return (
            <View style={styles.row}>
                {items}
            </View>
        );
    }

    render() {
        var items = this.props.items || [];
        var itemsPerRow = this.props.itemsPerRow || 3;

        var groups = this.groupItems(items, itemsPerRow);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return (<ListView
            {...this.props}
            renderRow={(row) => this.renderRow(row) }
            dataSource={ds.cloneWithRows(groups)}
        />);
    }
}


var styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        overflow: 'hidden'
    }
});
