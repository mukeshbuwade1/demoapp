import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

const About = ({ navigation }) => {
    return (
      <View>
        <Text>About</Text>
        <Button title="home" onPress={() => navigation.navigate('DrawerNav')} />
        
      </View>
    );
  };

export default About

const styles = StyleSheet.create({})
