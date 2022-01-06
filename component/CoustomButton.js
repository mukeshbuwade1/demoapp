import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const CoustomButton =(props)=>{
  return(
    <View style={[{alignItems:"center", marginVertical:10 }]} >
    <TouchableOpacity style={[{paddingHorizontal:50, paddingVertical:5, backgroundColor:"#0007", borderRadius:50}]} onPress={props.onPress}>
    <Text>
    {props.title}
    </Text>
    </TouchableOpacity>
    </View>
  )
}
export default CoustomButton