import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UniversityDetails = ({navigation, route}) => {
  return (
    <View style={styles.UniversityDetailsContainer}>
      <Text style={{fontSize: 30,}}>{route.params.universityDatas.name}</Text>
      <Text style={{color:'blue'}}>{route.params.universityDatas.web_pages}</Text>
      <Text style={{fontSize:20,}}>{route.params.universityDatas.country}</Text>
    
      
      <Pressable style={styles.detailsButtonContainer} onPress={()=> navigation.navigate("Univertsy")}>
                <Text style={{fontSize:20, fontWeight:"bold", textAlign:"center", top:11,}}>X</Text>
            </Pressable>
    </View>
  )
}

export default UniversityDetails

const styles = StyleSheet.create({

  UniversityDetailsContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    
  
  },
  detailsButtonContainer: {
    width:50,
    height:50,
    backgroundColor:"red",
    borderRadius:30,
    bottom:375,
    left:150,

  },
})