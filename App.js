
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,TextInput,  Button } from 'react-native';
import { connect } from 'react-redux';
import { addOperator, subtractOperator, divideOperator, multiplyOperator } from './src/actions';
import config from './src/config';


export default class App extends Component {
  render() {
    return (

      <View>
         <TextInput          
            style={{width: config.deviceWidth, height: 60, borderWidth: 1}}
           
            value='0'
           />
       <View style={{flexDirection:'row' }}>
       <Button style={{width:60,height:100}} title="7" />
       <Button  title="8" />
       <Button title="9" />
       <Button  title="X" />
       </View>
       <View style={{flexDirection:'row',width: config.deviceWidth,backgroundColor: 'gray' }}>
       <Button  title="4" />
       <Button  title="5" />
       <Button title="6" />
       <Button  title="/" />
       </View>
       <View style={{flexDirection:'row',width: config.deviceWidth,backgroundColor: 'gray' }}>
       <Button  title="1" />
       <Button  title="2" />
       <Button title="3" />
       <Button  title="+" />
       </View>
       <View style={{flexDirection:'row',width: config.deviceWidth,backgroundColor: 'gray' }}>
       <Button  title="C" />
       <Button  title="0" />
       <Button title="." />
       <Button  title="=" />
       </View>
        
      </View>
    );
  }
}

