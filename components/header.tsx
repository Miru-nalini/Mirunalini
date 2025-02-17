import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={{fontFamily:'boldItalic',fontSize:40, textShadowColor:'gray',textShadowOffset:{width:2,height:2},shadowOpacity:0.8}}>Mirunalini</Text>
      <View style={styles.menu}>
        <TouchableOpacity onPress={()=>{router.replace('/')}}>
        <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={()=>{router.push('/about')}}>
        <Text style={styles.text}>About</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={()=>{router.push('/works')}}>
        <Text style={styles.text}>Works</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={()=>{router.push('/contact')}}>
        <Text style={styles.text}>Contact</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: 70,
        width: '100%',
        paddingHorizontal:50,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
          width: 1,
          height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 15,
        elevation: 8,

    },
    menu:{
        flexDirection:'row',
        justifyContent:'flex-end',
        gap:30,
        alignItems:'center',
        height:'100%',
        width:'30%'
    },
    text:{
        fontFamily:"italic",
        fontSize:24,
        textDecorationLine:'underline',
        textDecorationColor:'gray'
    }
})