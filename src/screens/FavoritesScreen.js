import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MealsList from '../components/MealsList/MealsList';
import { FavoritesContext } from '../store/context/FavoritesContext';
import { MEALS } from '../utils/data/DummyData';
import {useSelector, useDispatch} from 'react-redux';
const FavoritesScreen = () => {
  //const favMealContext=React.useContext(FavoritesContext);
 // console.log("fav--->",favMealContext)
 //redux
 const favMealIds=useSelector(state => state.favMeals.ids);
 
//const favMeals=MEALS.filter(meal=>favMealContext.ids.includes(meal.id))
//console.log("fav=>",favMeals)
const favMeals = MEALS.filter(meal => favMealIds.includes(meal.id));
if(favMeals.length===0){
  return(
    <View style={styles.root}>
      <Text style={styles.text}>
             You have no favorite meals Yet.
      </Text>
    </View>
  )
     
}
return <MealsList displayitem={favMeals} />;
}

export default FavoritesScreen;
const styles=StyleSheet.create({
root:{
flex:1,
justifyContent:'center',
alignItems:'center'

},
text:{
fontSize:18,
fontWeight:'bold',
color:'white'
}
})