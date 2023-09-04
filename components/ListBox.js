import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListBox = (props) => {
  return (
    <Pressable style={styles.container}
    onPress={props.handleOnPress}>
      <Text style={styles.universtyTextContainer}>{props.sendRenderData}</Text>
      </Pressable>
  )
}

export default ListBox

const styles = StyleSheet.create({

    container:{
        backgroundColor:'#FF9B50',
        marginVertical:8,
        paddingVertical:3,
        alignItems:'center',
        borderRadius:10,
    },
    universtyTextContainer:{

        fontWeight:'bold',
        paddingVertical: 20,
        textAlign: "center",
    }
})