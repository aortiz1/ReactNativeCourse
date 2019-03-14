


import React from 'react';
import ReactNative from 'react-native';
import { Text } from 'react-native';

const App = () =>{
    return (
        <Text>Some meaningful text</Text>
    );
};

ReactNative.AppRegistry.registerComponent('albums', ()=> App);