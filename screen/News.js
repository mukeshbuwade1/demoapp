import React from 'react'
import { ImageBackground, ActivityIndicator, FlatList, Linking, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CommonHeader from '../component/CommonHeader';
import { Colors } from '../constant/Constant';
import Screenshot from "../assets/image/Screenshot.png";
import axios from "axios";
import Emptylist from '../components/Emptylist';




const data = [
    { thumb: Screenshot, link: "https://drive.google.com/file/d/1irQpSCOFAQuk6Qf77Df5j1KbYJYQLdLu/view?usp=sharing" },
    { thumb: Screenshot, link: "https://drive.google.com/file/d/1irQpSCOFAQuk6Qf77Df5j1KbYJYQLdLu/view?usp=sharing" }
]

const renderItem = ({ item }) => {
    return (
        <TouchableOpacity onPress={() => Linking.openURL(item.link)} style={{ marginBottom: 25, marginTop: 5 }} >
            <ImageBackground source={item.thumb} style={{ width: 325, height: 550, justifyContent: "center", alignItems: "center" }} >
                <View style={{ padding: 15, backgroundColor: "#a00b", borderRadius: 15 }}>
                    <Text style={{ fontSize: 30, fontWeight: "bold", color: Colors.white }}>
                        26/12/2021
                    </Text>
                    <Text style={{ fontSize: 15, fontWeight: "bold", color: Colors.white }}>
                        Click here to read news
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const News = ({ navigation }) => {
    const [IsLoader, setIsLoader] = React.useState(true);
    const [news, setNews] = React.useState([])
    const getNews = async (api) => {
        const newslink = api[3].request.url
        const news = await axios.get(newslink)
        const data = news.data.newspapers;
        console.log("news123", data)
        setNews(data)
    }
    const mycategoty = async () => {
        
        try {
            const res = await axios.get("https://www.getpostman.com/collections/5685ec58059ef4609039")
            console.log("NEWSPAPER LOADED..........")
            if (res) {
                setIsLoader(false)
            }
            const api = res.data.item
            console.log("newsapi", api)
            getNews(api)
          }
          catch(err) {
            console.log("ERROR WHEN LOADING NEWSPAPER ..........")
            console.log("ERROR",err)
            if (err) {
                setIsLoader(false)
            }
          }
    }
    React.useEffect(() => {
        mycategoty();
    }, [])
    return (
        <SafeAreaView style={{ flex: 1, alignItems: "center", backgroundColor: Colors.primery }}>
            {IsLoader ? (<ActivityIndicator size="large" color="#fff" />) : (
                <View>
                    <CommonHeader navigation={navigation} title={"News"} />
                    {
                        news.length == 0 ? <Emptylist /> : (<FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={(i, id) => id}
                        />)
                    }
                </View>
            )}

        </SafeAreaView>
    )
}

export default News

const styles = StyleSheet.create({})
