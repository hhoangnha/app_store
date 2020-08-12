import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AntDesign,MaterialIcons } from '@expo/vector-icons';

export default function Demo() {
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
            <MaterialIcons name="verified-user" size={24} color="black" />
            <AntDesign name="stepforward" size={24} color="black" />
                <Text>ok</Text></View>
            <View style={{flex:0.5, backgroundColor:"blue",width:"100%"}}><Text>ok</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"center", alignItems:"center", flex:1, flexDirection:"row"
    },
    box1:{
        flex:0.5, backgroundColor:"red",width:"100%",height:"100%"
    }
})
