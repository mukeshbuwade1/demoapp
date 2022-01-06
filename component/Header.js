import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Picker } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "../constant/Constant";
import axios from "axios";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { CURRNT_CITY } from "../redux/Action";



const Header = ({ navigation }) => {
  const myState = useSelector((state) => state.changeState);
  const dispatch = useDispatch();
  console.log("myState" ,myState);
  

  const cityName = myState.cities
  const [cityList, setcityList] = React.useState([])
  const GetCityList = async (url) => {
    const res = await axios.get(url)
    const data = res.data.cities
    setcityList(data)
  }
  const GetCityListURL = async () => {
    const res = await axios.get("https://www.getpostman.com/collections/5685ec58059ef4609039")
    const api = res.data
    const url = api.item[0].request.url
    
    GetCityList(url)
  }
  React.useEffect(() => {
    GetCityListURL()
  }, [])

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '700',
            color: '#fff',
            marginHorizontal: 5,
          }}>
          Home
        </Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Picker
          selectedValue={myState.currnt_city}
          style={{ height: 50, width: 150, color: '#fff', }}
          onValueChange={(itemValue, itemIndex) => dispatch({ type: CURRNT_CITY , payload: itemValue })}
          mode={'dialog'}>
          {
            cityList.map(i => {
              let { name, id } = i;
              return (<Picker.Item label={name} value={id} />)
            })
          }
        </Picker>
        <TouchableOpacity style={{ position: "absolute", right: 10, zIndex: -1 }} >
          <Ionicons name="location" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}


export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.primery,
    padding: 8,
    backgroundColor: '#8f0000',
  },
})
