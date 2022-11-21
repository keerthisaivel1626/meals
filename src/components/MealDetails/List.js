import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const List = ({data}) => {
  return (
   data.map(datum => {
        return <View key={datum} style={styles.listItem}>
           <Text style={styles.itemText}>{datum}</Text>
         </View>;
      })
  )
}

export default List;
const styles=StyleSheet.create({
     
    listItem:{
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:4,
        marginVertical:4,
        marginHorizontal:12,
        backgroundColor:'#e2b497'

    },
    itemText:{
        textAlign:'center',
        color:'#351401'

    }
})