import React from 'react';
import {View,Text} from 'react-native';
import styles from './style';

import { FlashList } from '@shopify/flash-list'

const DATA = [
    {
      title: "First Item",
    },
    {
      title: "Second Item",
    },
    {
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },
      {
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
      title: "First Item",
    },
    {
      title: "Second Item",
    },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
      title: "First Item",
    },
    {
      title: "Second Item",
    },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
      title: "First Item",
    },
    {
      title: "Second Item",
    },{
      title: "First Item",
    },
    {
      title: "Second Item",
    },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
      title: "First Item",
    },
    {
      title: "Second Item",
    },{
      title: "First Item",
    },
    {
      title: "Second Item",
    },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },{
      title: "First Item",
    },
    {
      title: "Second Item",
    },{
        title: "First Item",
      },
      {
        title: "Second Item",
      },
  ];

const FlashLists = () =>{
    return (
        <View style={styles.container}>
            <Text>FlashList</Text>
            <FlashList
      data={DATA}
      renderItem={({ item }) => <Text>{item.title}</Text>}
      estimatedItemSize={200}
    />
        </View>
    )
}

export default FlashLists