// import React from 'react'
// import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native'
// import { Colors } from "../constant/Constant";

// const city = [
//     { id: 1, name: "a" },
//     { id: 2, name: "b" },
//     { id: 3, name: "c" },
// ]

// const GetCity = (props) => {
//     const [selectedLanguage, setSelectedLanguage] = React.useState();
//     const renderItem = ({ item }) => (
//         <TouchableOpacity style={styles.item} onPress={} >
//             <Text style={styles.title}>{item.name}</Text>
//         </TouchableOpacity>
//     );
//     return (
//         <View style={{ flex: 1, backgroundColor: Colors.primery, justifyContent: "center", alignItems: "center" }}>
//             <View style={{ width: "80%", backgroundColor: "#0002" }} >
//                 <Text>GetCity</Text>
//                 <FlatList
//                     data={city}
//                     renderItem={renderItem}
//                     keyExtractor={item => item.id}
//                 />
//                 <Button onPress={() => props.navigation.navigate('DrawerNav')} title="Login" />
//             </View>
//         </View>
//     )
// }

// export default GetCity

// const styles = StyleSheet.create({})

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const GetCity = () => {
    return (
        <View>
            <Text>GetCity</Text>
        </View>
    )
}

export default GetCity

const styles = StyleSheet.create({})

