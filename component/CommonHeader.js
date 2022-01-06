import React from 'react'
import { StyleSheet, Text, Dimensions, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "../constant/Constant"
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const CommonHeader = ({ navigation, title }) => {
    return (
        <View
            style={{
                width: windowWidth,
                paddingHorizontal: 10,
                flexDirection: "row",
                alignItems: 'center',
                paddingVertical: 5
            }}>
            <Ionicons onPress={() => navigation.openDrawer()} name="menu" size={24} color="#fff" />
            <Text style={{ fontSize: 16, marginLeft: 10, color: Colors.white }}>{title}</Text>
        </View>
    )
}

export default CommonHeader

const styles = StyleSheet.create({})
