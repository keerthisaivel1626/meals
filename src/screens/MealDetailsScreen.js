import {View, Text, StyleSheet, Image, ScrollView, Button} from 'react-native';
import React, {useLayoutEffect, useContext} from 'react';

import { useSelector,useDispatch } from 'react-redux';
import {MEALS} from '../utils/data/DummyData';
import MealDetails from '../components/MealDetails';
import SubTitle from '../components/MealDetails/SubTitle';
import List from '../components/MealDetails/List';
import IconButton from '../components/MealDetails/IconButton';
import {FavoritesContext} from '../store/context/FavoritesContext';
import {addFavorite, removeFavorite} from '../store/redux/favorites';
const MealDetailsScreen = ({route, navigation}) => {
  //const favMealsCtx = useContext(FavoritesContext);
//redux 
const favMealsCtx = useSelector(state => state.favMeals.ids);
const dispatch=useDispatch()
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  //const mealFav = favMealsCtx.ids.includes(mealId);
  const mealFav = favMealsCtx.includes(mealId);
  const changeFavStatusHandler=()=>{
    if(mealFav){
     // favMealsCtx.removeFav(mealId);   
     dispatch(removeFavorite({id:mealId}))
    }else{
     // favMealsCtx.addFav(mealId);
     dispatch(addFavorite({id:mealId}))
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            color="white"
            icon={mealFav ? 'star' : 'star-outline'}
            onTap={changeFavStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailsText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle subtitle={'Ingredients'} />
          <List data={selectedMeal.ingredients} />
          <SubTitle subtitle={'Steps'} />
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;
const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailsText: {
    color: 'white',
  },
  listContainer: {
    width: '80%',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
});
