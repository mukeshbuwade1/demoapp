import React from 'react';
import { StyleSheet, Text, View, Button, Linking, Image, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import profile from "../assets/image/dummy-user.png";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Home from "../screen/Home";
import Login from "../screen/Login";
import About from "../screen/Aboutus";
import Video from "..//screen/Video";
import News from "..//screen/News";
import ServiceListing from "../screen/ServiceListing";
import { Colors } from '../constant/Constant';
import GetCity from '../screen/GetCity';

function CustomDrawerContent(props) {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.primeryDark }}>
      <DrawerContentScrollView {...props}>
        <View style={{ paddingVertical: 30, marginLeft:15 }}>
          {/* <Image source={profile} style={{ width: 60, height: 60, backgroundColor: Colors.white, borderRadius: 100, borderWidth: 3, borderColor: Colors.header }} /> */}
          <Text style={{ fontSize: 20, marginTop: 10, color: Colors.white, fontWeight:"700" }}>WellCome..</Text>
        </View>
        <DrawerItemList {...props}> </DrawerItemList>
      </DrawerContentScrollView>
      {/* <TouchableOpacity style={{ margin: 20, flexDirection: "row" }}  >
        <Entypo name="log-out" size={24} color="#fff" />
        <Text style={{ color: "#fff", fontSize: 17, fontWeight: "700", marginLeft: 10 }}>Logout</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const Drawer = createDrawerNavigator();
function DrawerNav() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#00f3",
        drawerLabelStyle: {
          color: "#fff",
          fontSize: 17,
          fontWeight: "700"
        }
      }}
      initialRouteName="HomeStack"
    >
      <Drawer.Screen name="HomeStack" component={HomeStack} options={{
        drawerIcon: () => (
          <Entypo name="home" size={22} color="#fff" />
        )
      }} />
      <Drawer.Screen name="Video" component={Video} options={{
        drawerIcon: () => (
          <FontAwesome5 name="video" size={22} color="#fff" />
        )
      }} />
      <Drawer.Screen name="News" component={News} options={{
        drawerIcon: () => (
          <Ionicons name="newspaper" size={22} color="#fff" />
        )
      }} />
      <Drawer.Screen name="About" component={About} options={{
        drawerIcon: () => (
          <FontAwesome5 name="user-alt" size={22} color="#fff" />
        )
      }} />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();
const HomeStack=()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Stack.Screen options={{ headerShown: false }} name="ServiceListing" component={ServiceListing} />
    </Stack.Navigator>
  )
}

export default function RootNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DrawerNav">
        <Stack.Screen options={{ headerShown: false }} name="DrawerNav" component={DrawerNav} />
        <Stack.Screen options={{ headerShown: false }} name="GetCity" component={GetCity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
