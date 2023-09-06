import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ListBox from '../components/ListBox'

import SearchBar from '../components/SearchBar'


const Univertsy = ({navigation}) => {

 const [UniversityList, setUniversityList]= useState([])

const [searchData, setSearchData] = useState('')
const [filterList, setFilterList] = useState([])

useEffect(() => {
  axios.get('http://universities.hipolabs.com/search?country=Turkey')
  .then((value)=> setUniversityList(value.data) )
}, [])

const handleNavigation = (value) => {
  navigation.navigate('UniversityDetails', {universityDatas: value})

}


const handleSearch= (value)=> {
  setSearchData(value)



const filtered= UniversityList.filter((item)=>
  item.name.toLowerCase().includes(searchData.toLowerCase())
);

setFilterList(filtered)

}

  return (
    <View style={styles.UniversityCointainer}>

      <Text style>UNUVERSITY</Text>
      <SearchBar  arananKelime={handleSearch} />


      <View style={styles.flatListContainer}>
        <FlatList
        showsVerticalScrollIndicator={false}
        data={filterList.length > 0 ? filterList : UniversityList}
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
    
    backgroundColor: '#176B87',
    
}

})