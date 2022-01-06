import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Emptylist = () => {
    return (
        <View style={{flex:1, alignItems:"center", marginTop:100}}>
            <FontAwesome5 name="parachute-box" size={66} color="#000" />
            <Text style={{fontSize:20, fontWeight:"700", marginTop:10}}>No Data found</Text>
            <Text>retry after some time</Text>
        </View>
    )
}

export default Emptylist

const styles = StyleSheet.create({})
