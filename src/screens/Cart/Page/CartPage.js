import React from 'react'
import { View, Text,Button, StyleSheet } from 'react-native'

export default function CartPage({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{fontSize:17,textTransform:"uppercase", color:"white",padding:10}}>Giỏ hàng</Text>
            </View>
            <View style={styles.boxProduct}>
                <View style={styles.itemProduct}>
                    <Text>ok</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        width:"100%",
        backgroundColor:"#1ABC9C",
        justifyContent:"center",
        alignItems:"center"
    },
    boxProduct:{
        height:200,
        backgroundColor:"white"
    },
    itemProduct:{

    }
})
