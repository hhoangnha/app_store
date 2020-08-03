import React, { Component } from 'react'
import { Text, View,TextInput, StyleSheet, TouchableOpacity  } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

function ScreenLogin({ navigation }){
    return (    
        <View style={style.container}>
            <View style={style.boxLogo}>
                <Text>LOGO WeTech</Text>
            </View>
            <View style={style.boxLogin}>
                <View style={style.boxInput}>
                    <Icon style={style.icon} name="user" size={25} color="white" />
                    <TextInput 
                        style={style.input}
                        placeholder="Tên đăng nhập"
                        placeholderTextColor="white"
                        />
                </View>
                <View style={style.boxInput}>
                    <Icon style={style.icon} name="lock" size={25} color="white" />
                    <TextInput 
                        style={style.input}
                        placeholder="Mật khẩu"
                        placeholderTextColor="white"
                        />
                    <Icon  style={style.showIconPassword} name="eye" size={20} color="#DBDBDB" />
                </View>
                <TouchableOpacity onPress = {()=>{alert("ok")}} style={style.btnLogin}>
                        <Text style={style.titleLogin}>đăng nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.push("Register")} style={style.btnRegister}>
                        <Text>Bạn chưa có tài khoản?  <Text style={style.registerLink}>Đăng ký ngay</Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
    },
    boxLogo:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    boxLogin:{
        flex:1,
        backgroundColor:"#6FB477",
        justifyContent:"center",
        alignItems:"center",
        
    },
    boxInput:{
        flexDirection:"row",
        alignItems:"center",
        borderBottomWidth:1.5,
        borderColor:"#E4E0E0",
        width:"90%",
        position:'relative'
    },
    icon:{
        marginTop:"7%",      
    },
    showIconPassword:{
        right:"5%",
        top:"5%"
    },  
    input:{
        width:"90%",
        marginTop:"7%",        
        padding:"3%",
        fontSize:15,
        color:"white"
    },
    btnLogin:{
        width:"90%",
        padding:"5%",
        marginTop:"7%",
        backgroundColor:"#0F7C03",
        justifyContent:"center",
        alignItems:"center",
        opacity:.9
    },
    btnRegister:{
        marginTop:"5%",
    },
    registerLink:{
        color:"#2950F1"
    },
    titleLogin:{
        fontSize:16,
        textTransform:"uppercase",
        color:"white"
    }
})


module.exports = {
    ScreenLogin:ScreenLogin
}
