import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions,StatusBar, SafeAreaView } from "react-native";
import { TextInput, Divider } from 'react-native-paper';
import CoustomButton from "../component/CoustomButton";
import { Colors } from "../constant/Constant";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = (props) => {
  return (
    
      <ScrollView contentContainerStyle={styles.contentContainer} >
        <StatusBar backgroundColor={Colors.header} barStyle={"light-content"} />
        <View style={{ width: windowWidth * 0.80, }}>
          <TextInput
            mode="Flat"
            label="Mobile"
            placeholder="Please Enter Your Mobile Number"
            style={styles.inputBox}
          />

          <TextInput
            mode="Flat"
            label="Email"
            placeholder="Please Enter Your Password"
            style={styles.inputBox}
          />

          <TouchableOpacity style={[{ alignItems: "flex-end", }]}>
            <Text>Forgot Password</Text>
          </TouchableOpacity>


          <CoustomButton onPress={() => props.navigation.navigate('DrawerNav')} title={"Login"} />
          <Divider style={{ marginVertical: 10, backgroundColor: "#f00", height: 2 }} />

          <TouchableOpacity style={[{ alignItems: "center", }]}>
            <Text>Not have an account? Click here</Text>
          </TouchableOpacity>



        </View>
      </ScrollView>
    
  )
}
export default Login;

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20, flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:Colors.primery
  },

  inputBox: {
    marginVertical: 10,
    backgroundColor: "#0001"
  }
})

