import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, TextInput, View, Button } from "react-native";
import {connect} from 'react-redux';

export default class Home extends Component {

 
  render() {
 

    return (
      <View >
          <TextInput          
            style={{width: 40, height: 40, borderWidth: 1}}
           
            value='0'
           />
       
        <Button  title="Clear" />

       
      </View>


    );
  }
}


