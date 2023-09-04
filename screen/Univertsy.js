import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ListBox from '../components/ListBox'

const Univertsy = ({navigation}) => {


const [name, setName]= useState([])

useEffect(() => {
  axios.get('http://universities.hipolabs.com/search?country=Turkey')
  .then((value)=> setName(value.data) )
}, [])

const handleNavigation = (value) => {
  navigation.navigate('UniversityDetails', {universityDatas: value})
}
  return (
    <View style={styles.UniversityCointainer}>

      <Text style>UNUVERSITY</Text>
      <View style={styles.flatListContainer}>
        <FlatList
        data={name}
        keyExtractor={(item, index)=> index}
        renderItem={({item})=> <ListBox sendRenderData={item.name}
        handleOnPress={()=> handleNavigation(item)}
        />}
         />
      </View>

    </View>
  )
}

export default Univertsy

const styles = StyleSheet.create({
  UniversityCointainer:{

    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#176B87'
    
  },

  flatListContainer:{
    width: '80%',
    height:550,
    borderWidth: 1,
    backgroundColor: 'white',
    
}

})