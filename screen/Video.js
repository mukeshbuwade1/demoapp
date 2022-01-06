import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Linking, Dimensions, Image, SafeAreaView, FlatList, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from "../constant/Constant";
import thumbnail from "../assets/image/thumbnail.jpg";
import err from "../assets/image/404.jpg";
import insta from "../assets/image/insta.jpg";
import newn from "../assets/image/newn.jpg";
import iso from "../assets/image/iso.jpg";
import CommonHeader from '../component/CommonHeader';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const videodata = [
    { thumbnail: thumbnail, title: "Create a Netflix logo using css", link: "https://www.youtube.com/watch?v=hMgidlSVRmk", },
    { thumbnail: err, title: "Amazing 404 Typography Page Using Html & CSS Only", link: "https://www.youtube.com/watch?v=gSpCRacA6ck", },
    { thumbnail: insta, title: "Instagram logo with HTML and CSS", link: "https://www.youtube.com/watch?v=urUVzGzx-ks", },
    { thumbnail: newn, title: "Attractive Isometric text by HTML and CSS", link: "https://www.youtube.com/watch?v=uv-s1H610Dw", },
    { thumbnail: iso, title: "Atractive Neon Text || webdevelopment tricks 2021", link: "https://www.youtube.com/watch?v=89Aroh2pBN0", },

]

const renderItem = ({ item }) => {
    const { thumbnail, title, link } = item
    return (
        <TouchableOpacity style={{ marginVertical: 20 }} onPress={() => Linking.openURL(link)}>
            <View style={{ width: windowWidth, height: 7, backgroundColor: Colors.header }}>
            </View>
            <ImageBackground source={thumbnail} style={{ width: windowWidth, height: 250, justifyContent: "center", alignItems: "center" }}>
                <AntDesign style={{ backgroundColor: "#000", borderRadius: 100, opacity: 0.7 }} name="play" size={80} color="#fff" />
            </ImageBackground>

            <Text style={{ fontSize: 18, fontWeight: "700", marginHorizontal: 10, marginVertical: 5, color: Colors.white }}>{title}</Text>

        </TouchableOpacity>
    )
}

const Video = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: "center", backgroundColor: Colors.primery }}>
            <CommonHeader navigation={navigation} title={"Videos"}/>
            
            <FlatList
                data={videodata}
                renderItem={renderItem}
                keyExtractor={(i, id) => id}
            />

        </SafeAreaView>
    )
}

export default Video

const styles = StyleSheet.create({})
