import React from 'react'
import { ScrollView, ActivityIndicator, SafeAreaView, StyleSheet, Text, View, Image, Button, Dimensions, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import Header from '../component/Header';
import { SliderBox } from 'react-native-image-slider-box';
import TextTicker from 'react-native-text-ticker';
import { Colors } from "../constant/Constant"
import { MaterialIcons } from '@expo/vector-icons';
import axios from "axios";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { CURRNT_CITY } from "../redux/Action";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Home = ({ navigation }) => {
    const [IsLoader, setIsLoader] = React.useState(true);
    const [allServiceList, setAllServiceList] = React.useState([]);
    const [allHeadlineText, setAllHeadlineText] = React.useState("")
    const [timer, setTimer] = React.useState(3000)
    const myState = useSelector((state) => state.changeState);
    const dispatch = useDispatch();
    console.log("myState in home", myState.currnt_city);

    // const headline = [{
    //     text: "Super long piece of text is long. The quick brown fox jumps over the lazy dog."
    // },
    // {
    //     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    // }]
    // headline.map((val)=>{
    //     setAllHeadlineText({})
    // })


    const serviceList = async (api) => {
        const url = api[1].request.url
        const res = await axios.get(url)
        const allServices = res.data.services;
        setAllServiceList(allServices)
    }
    const mycategoty = async () => {
        const res = await axios.get("https://www.getpostman.com/collections/5685ec58059ef4609039");
        const api = res.data.item
        serviceList(api)

    }
    const getText = async () => {
        console.log("text")
        const res = await axios.get("https://www.getpostman.com/collections/5685ec58059ef4609039");
        if (res) {
            setIsLoader(false)
        }
        const api = res.data.item
        const url = api[5].request.url
        const URLres = await axios.get(url)
        const textList = URLres.data.headline;
        console.log("lenght", textList.length)
        let text = "";
        let totleLenght = 0;
        for (let i = 0; i < textList.length; i++) {
            text = text + textList[i].text + " || "
            totleLenght = totleLenght + textList[i].text.length
        }
        console.log("finalText : ", text)
        setAllHeadlineText(text)
        console.log("length : ", totleLenght)
        setTimer(totleLenght * 100)
    }
    React.useEffect(() => {
        mycategoty();
        getText()

    }, [])


    const state = {
        images: [
            'https://source.unsplash.com/1024x768/?nature',
            'https://source.unsplash.com/1024x768/?water',
            'https://source.unsplash.com/1024x768/?girl',
            'https://source.unsplash.com/1024x768/?tree', // Network image
            // Local image
        ],
    };
    // const categoryType = [
    //     { name: 'plumber', icon: 'agriculture' },
    //     { name: 'Advocate', icon: 'agriculture' },
    //     { name: 'agarbatti manufacture', icon: 'agriculture' },
    //     { name: 'agriculture & fertilizer', icon: 'agriculture' },
    //     { name: 'plumber', icon: 'agriculture' },
    //     { name: 'plumber', icon: 'agriculture' },
    //     { name: 'plumber', icon: 'agriculture' },
    //     { name: 'plumber', icon: 'agriculture' },
    //     { name: 'plumber', icon: 'agriculture' },
    //     { name: 'plumber', icon: 'agriculture' },
    //     { name: 'plumber', icon: 'agriculture' },
    //     { name: 'plumber', icon: 'agriculture' },
    //     { name: 'plumber', icon: 'agriculture' },
    // ];

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={{
                    backgroundColor: '#cfaca9',
                    margin: 5,
                    borderRadius: 5,
                    width: windowWidth * 0.3,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,

                }}

            >
                <Image source={{ uri: item.file }} style={{ width: 40, height: 40 }} />
                <Text style={{ textAlign: 'center', color: Colors.black }}> {item.title} </Text>
            </TouchableOpacity>
        );
    };
    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primery }} >
            <StatusBar backgroundColor={Colors.header} barStyle={"light-content"} />
            {
                IsLoader ? (<ActivityIndicator size="large" color="#fff" />) : (
                    <View>
                        <Header navigation={navigation} />
                        {/*....main view........ */}
                        <ScrollView style={{ width: windowWidth }}>
                            <View style={{ width: windowWidth }}>
                                {/*......slider ...... */}
                                <SliderBox
                                    sliderBoxHeight={200}
                                    dotStyle={{ width: 0 }}
                                    autoplay={true}
                                    circleLoop={true}
                                    images={state.images}
                                />
                            </View>
                            {/*..marquee..text */}
                            <View style={{ backgroundColor: Colors.primery, width: windowWidth }}>
                                <TextTicker
                                    style={{
                                        fontSize: 15,
                                        paddingVertical: 5,
                                        color: Colors.white,
                                        paddingLeft: 20
                                    }}
                                    duration={timer}
                                    loop
                                    bounce
                                    repeatSpacer={50}>
                                    {allHeadlineText}
                                    {/* {headline.map((val) => <Text>{val.text} </Text>)} */}
                                </TextTicker>
                            </View>

                            {/* ....categoryType.....*/}
                            <View
                                style={{
                                    width: windowWidth,
                                    backgroundColor: "#edccca",
                                    minHeight: 500
                                }}>
                                <FlatList
                                    removeClippedSubviews
                                    data={allServiceList}
                                    renderItem={renderItem}
                                    keyExtractor={(item, id) => id}
                                    numColumns={3}
                                />
                            </View>
                        </ScrollView>
                    </View>
                )}
        </SafeAreaView>


    )
}

export default Home

const styles = StyleSheet.create({})
