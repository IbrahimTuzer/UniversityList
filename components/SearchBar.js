import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const SearchBar = (props) => {
  return (
    <View>
      <TextInput  
      placeholder='buraya giriniz..'
      onChangeText={props.arananKelime}
      style={styles.textInputStyle}
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({


  textInputStyle:{
    borderWidth:0.2,
    textAlign:"center",
    width:'100%',
    padding:10,
    borderRadius:10,
    marginTop:10,
    backgroundColor: 'white',
},
})