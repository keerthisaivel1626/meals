import React, {useEffect, useLayoutEffect} from 'react';
import MealsList from '../components/MealsList/MealsList'

import {MEALS, CATEGORIES} from '../utils/data/DummyData';
//we can use useRoute in navigation  instead of route properity

const MealsOverViewScreen = ({route, navigation}) => {
  const catId = route.params.categoryId;

  useEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === catId,
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  const displayitem = MEALS.filter(mealsItem => {
    return mealsItem.categoryIds.indexOf(catId) >= 0;
  });

return (
  <>
    <MealsList displayitem={displayitem} />
  </>
);
};
export default MealsOverViewScreen;

